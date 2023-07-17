import React, { useState } from 'react';
import { useStateContext } from '../contexts/ContextProvider';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const { currentColor, currentMode } = useStateContext();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // Send a POST request to the server for authentication
    fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
      credentials: 'include', // Include cookies in the request
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Log the response data from the server

        if (data.loggedIn) {
          // Login successful
          onLogin(); // Call the onLogin prop passed from the parent component
          navigate('/home'); // Redirect to the home page
        } else {
          // Login failed
          setErrorMessage(data.message || 'Invalid username or password');
        }
      })
      .catch((error) => {
        console.error('Error logging in:', error);
        setErrorMessage('An error occurred while logging in');
      });
  };

  const handleCreateAccount = () => {
    navigate('/create-account');
  };

  return (
    <div
      className={`flex flex-col items-center justify-center h-screen ${
        currentMode === 'Dark' ? 'dark' : ''
      }`}
    >
      <div
        className={`w-72 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-lg shadow-lg p-8 ${
          currentMode === 'Light' ? 'bg-gray-300' : ''
        }`}
      >
        <h1 className="text-3xl font-bold mb-4 text-center">Login</h1>
        <input
          type="text"
          className={`w-full border border-gray-300 rounded-md px-3 py-2 mb-4 ${
            currentMode === 'Dark' ? 'text-black' : ''
          }`}
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
        />
        <div className="flex flex-col items-center mt-2">
          <input
            type="password"
            className={`w-full border border-gray-300 rounded-md px-3 py-2 mb-2 ${
              currentMode === 'Dark' ? 'text-black' : ''
            }`}
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2 mt-2 transition-colors duration-300"
            onClick={handleLogin}
            style={{ backgroundColor: currentColor }}
          >
            Login
          </button>
        </div>
        {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>} {/* Display error message */}
        <div className="flex justify-between mt-4">
          <button
            type="button"
            className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
            style={{ color: currentColor }}
            onClick={handleCreateAccount}
          >
            Create Account
          </button>

        </div>
      </div>
    </div>
  );
};

export default Login;
