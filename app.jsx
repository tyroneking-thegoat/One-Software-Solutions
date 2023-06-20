import React, { useState } from 'react';
import './Header.css';
import { PieChart } from 'react-minimal-pie-chart';

const Banner = ({ username }) => {
  return (
    <div className="banner">
      <div className="banner-content">
        <h1 className="greeting">Hello, {username}</h1>
        <p className="welcome-quote">Welcome to your Healthier Lifestyle!</p>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleProfileDropdown = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <nav className="navbar">
      <button onClick={toggleDropdown} className="dropdown-button">
        ☰
      </button>

      {isOpen && (
        <div className="dropdown-menu">
          <a href="/food-search">Food Search</a>
          <a href="/workout-search">Workout Search</a>
          <a href="/preferences">Preferences</a>
        </div>
      )}

      <button onClick={toggleProfileDropdown} className="profile-button">
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
};

const MyDailyGoals = () => {
  // Placeholder data
  const goals = [
    { label: 'Calories', goal: 2000, remaining: 1500 },
    { label: 'Carbs', goal: 150, remaining: 100 },
    { label: 'Protein', goal: 100, remaining: 50 },
  ];

  const calculatePercentage = (value, goal) => {
    const percentage = (value / goal) * 100;
    return percentage.toFixed(1);
  };

  return (
    <div className="my-daily-goals">
      {goals.map((goal, index) => (
        <div className="goal-item" key={index}>
          <span className="goal-label">{goal.label} Remaining:</span>
          <span className="goal-value">{goal.remaining} {goal.label === 'Calories' ? 'kcal' : 'g'}</span>
          <div className="chart-container">
            <PieChart
              data={[
                { value: goal.remaining, color: '#00853E' },
                { value: goal.goal - goal.remaining, color: '#CCCCCC' },
              ]}
              lineWidth={15}
              paddingAngle={0}
              rounded
              startAngle={90}
              animate
            />
            <div className="chart-percentage">{calculatePercentage(goal.remaining, goal.goal)}%</div>
          </div>
        </div>
      ))}
    </div>
  );
};

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
};

export default Header;
