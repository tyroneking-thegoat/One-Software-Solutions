import React, { useState } from 'react';
import './Header.css'; // Import the CSS file
import { PieChart } from 'react-minimal-pie-chart';

const Banner = ({ username }) => {
  return (
    <div className="banner">
      <div className="banner-content">
        <h1 className="greeting">Hello, John Doe{username}</h1>
        <p className="welcome-quote">Welcome to your Healthier Lifestyle!</p>
      </div>
    </div>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <nav className="navbar">
      <button onClick={() => setIsOpen(!isOpen)} className="dropdown-button">
        ☰
      </button>

      {isOpen && (
        <div className="dropdown-menu">
          <a href="/food-search">Food Search</a>
          <a href="/workout-search">Workout Search</a>
          <a href="/preferences">Preferences</a>
        </div>
      )}

      <button onClick={() => setIsProfileOpen(!isProfileOpen)} className="profile-button">
        <img src="https://cdn.pixabay.com/photo/2016/08/31/11/54/icon-1633249_1280.png" alt="Profile" />
      </button>

      {isProfileOpen && (
        <div className="dropdown-menu profile-dropdown">
          <a href="/my-profile">My Profile</a>
          <a href="/my-meals">My Meals</a>
          <a href="/my-workouts">My Workouts</a>
          <a href="/settings">Settings</a>
          <a href="/sign-out">Sign Out</a>
        </div>
      )}
    </nav>
  );
}

const MyDailyGoals = () => {
  // Placeholder data
  const calorieGoal = 2000;
  const calorieRemaining = 1500;
  const carbGoal = 150;
  const carbRemaining = 100;
  const proteinGoal = 100;
  const proteinNeeded = 50;

  return (
    <div className="my-daily-goals">
      <div className="goal-item">
        <span className="goal-label">Calories Remaining:</span>
        <span className="goal-value">{calorieRemaining} kcal</span>
        <div className="chart-container">
          <PieChart
            data={[
              { value: calorieRemaining, color: '#00853E' },
              { value: calorieGoal - calorieRemaining, color: '#CCCCCC' },
            ]}
            lineWidth={15}
            paddingAngle={0}
            rounded
            startAngle={90}
            animate
          />
        </div>
      </div>
      <div className="goal-item">
        <span className="goal-label">Carbs Remaining:</span>
        <span className="goal-value">{carbRemaining} g</span>
        <div className="chart-container">
          <PieChart
            data={[
              { value: carbRemaining, color: '#00853E' },
              { value: carbGoal - carbRemaining, color: '#CCCCCC' },
            ]}
            lineWidth={15}
            paddingAngle={0}
            rounded
            startAngle={90}
            animate
          />
        </div>
      </div>
      <div className="goal-item">
        <span className="goal-label">Protein Needed:</span>
        <span className="goal-value">{proteinNeeded} g</span>
        <div className="chart-container">
          <PieChart
            data={[
              { value: proteinNeeded, color: '#00853E' },
              { value: proteinGoal - proteinNeeded, color: '#CCCCCC' },
            ]}
            lineWidth={15}
            paddingAngle={0}
            rounded
            startAngle={90}
            animate
          />
        </div>
      </div>
    </div>
  );
}

const Header = ({ username }) => {
  return (
    <>
      <Banner username={username} />
      <Navbar />
      <div className="content-wrapper">
        <h2 className="daily-goals-heading">My Daily Goals</h2>
        <MyDailyGoals />
      </div>
    </>
  );
}

export default Header;
