import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import './App.css';

import { useStateContext } from './contexts/ContextProvider';
import Login from './pages/Login';
import Home from './pages/Home';
import Search from './pages/search';
import Setting from './pages/setting';
import CreateAccount from './pages/CreateAccount';

const App = () => {
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
  } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, [setCurrentColor, setCurrentMode]);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const checkAuthentication = () => {
    // Check if the user is authenticated
    fetch('http://localhost:3001/login', {
      method: 'GET',
      credentials: 'include', // Include cookies in the request
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.loggedIn) {
          setIsAuthenticated(true);
          setCurrentUser(data.user);
        } else {
          setIsAuthenticated(false);
          setCurrentUser(null);
        }
      })
      .catch((error) => {
        console.error('Error checking authentication:', error);
      });
  };

  useEffect(() => {
    checkAuthentication(); // Check authentication when the component mounts
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    checkAuthentication(); // Check authentication after successful login
  };

  const handleLogout = () => {
    fetch('http://localhost:3001/logout', {
      method: 'GET',
      credentials: 'include', // Include cookies in the request
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.loggedIn) {
          setIsAuthenticated(false);
          setCurrentUser(null);
        }
      })
      .catch((error) => {
        console.error('Error logging out:', error);
      });
  };

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <Router>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <button
              type="button"
              onClick={() => setThemeSettings(true)}
              style={{ background: currentColor, borderRadius: '50%' }}
              className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
            >
              <FiSettings />
            </button>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg bg-main-bg min-h-screen md:ml-72 w-full'
                : 'bg-main-bg dark:bg-main-dark-bg w-full min-h-screen flex-2'
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar onLogout={handleLogout} />
            </div>
            <div>
              {themeSettings && <ThemeSettings />}
              <Routes>
                <Route path="/login" element={<Login onLogin={handleLogin} />} />
                <Route path="/create-account" element={<CreateAccount />} />
                <Route
                  path="/home"
                  element={isAuthenticated ? <Home currentUser={currentUser} /> : <Navigate to="/login" replace />}
                />
                <Route
                  path="/search"
                  element={isAuthenticated ? <Search currentUser={currentUser} /> : <Navigate to="/login" replace />}
                />
                <Route
                  path="/setting"
                  element={isAuthenticated ? <Setting currentUser={currentUser} /> : <Navigate to="/login" replace />}
                />
                <Route path="/" element={<Navigate to="/login" replace />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
