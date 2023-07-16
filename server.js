const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const session = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true,
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  session({
    secret: 'subscribe',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60 * 60 * 24 * 1000, // 1 day
    },
  })
);

const db = mysql.createPool({
  user: 'OSS',
  host: 'localhost',
  password: '1qaz2wsx!QAZ@WSX',
  database: 'account_database',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

app.post('/register', (req, res) => {
  const { username, password, email, first_name, last_name } = req.body;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
      return;
    }

    const sql = `INSERT INTO accounts (username, password, email, first_name, last_name) VALUES (?, ?, ?, ?, ?)`;
    const values = [username, hash, email, first_name, last_name];

    db.query(sql, values, (err, result) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
        return;
      }
      console.log('Account registered successfully');
      res.sendStatus(200);
    });
  });
});

app.get('/login', (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  db.query('SELECT * FROM accounts WHERE username = ?', username, (err, result) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
      return;
    }

    if (result.length > 0) {
      bcrypt.compare(password, result[0].password, (error, response) => {
        if (response) {
          req.session.user = result;
          console.log(req.session.user);
          res.cookie('userId', result[0].account_id, {
            maxAge: 60 * 60 * 24 * 1000, // 1 day
            httpOnly: true,
            secure: false,
          });
          res.send({ message: 'Login successful', loggedIn: true });
        } else {
          res.send({ message: 'Wrong username/password combination!', loggedIn: false });
        }
      });
    } else {
      res.send({ message: "User doesn't exist", loggedIn: false });
    }
  });
});

app.get('/user-profile', (req, res) => {
  if (req.session.user) {
    const { username } = req.session.user[0];

    db.query(
      'SELECT first_name, last_name, email, calories_burnt_goal, calories_intake_goal FROM accounts WHERE username = ?',
      [username],
      (err, result) => {
        if (err) {
          console.log(err);
          res.sendStatus(500);
          return;
        }

        if (result.length > 0) {
          res.send(result[0]);
        } else {
          res.send({});
        }
      }
    );
  } else {
    res.sendStatus(401);
  }
});

app.post('/update-settings', (req, res) => {
  if (req.session.user) {
    const { username } = req.session.user[0];
    const { first_name, last_name, email, calories_burnt_goal, calories_intake_goal } = req.body;

    db.query(
      'UPDATE accounts SET first_name = ?, last_name = ?, email = ?, calories_burnt_goal = ?, calories_intake_goal = ? WHERE username = ?',
      [first_name, last_name, email, calories_burnt_goal, calories_intake_goal, username],
      (err, result) => {
        if (err) {
          console.log(err);
          res.sendStatus(500);
          return;
        }

        res.sendStatus(200);
      }
    );
  } else {
    res.sendStatus(401);
  }
});

app.get('/logout', (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      console.log('Error logging out:', error);
      res.sendStatus(500);
      return;
    }
    res.clearCookie('userId');
    res.send({ message: 'Logout successful', loggedIn: false });
  });
});

app.listen(3001, () => {
  console.log('Server running');
});
