import React, { useState } from 'react';
import './Header.css'; // Import the CSS file
import { PieChart } from 'react-minimal-pie-chart';
import MyDailyGoalsWidget from './goalwidget';
import MyCalories from './calorieswidget';

const Banner = ({ username }) => {
  return (
    <div className="banner">
      <div className="banner-content">
        <h1 className="greeting">Hello, John Doe{username}</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
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




const Header = ({ username }) => {
  return (
    <>
      <Banner username={username} />
      <Navbar />
      <div>
      <MyDailyGoalsWidget/>
      {/* <MyCalories/> */}
      </div>
    </>
  );
}

export default Header;


