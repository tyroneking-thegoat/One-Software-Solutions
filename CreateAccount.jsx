import React, { useState } from 'react';
import { useStateContext } from '../contexts/ContextProvider';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const CreateAccount = () => {
  const { currentColor, currentMode } = useStateContext();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showRetypePassword, setShowRetypePassword] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordMatch(event.target.value === retypePassword);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleRetypePasswordChange = (event) => {
    setRetypePassword(event.target.value);
    setPasswordMatch(event.target.value === password);
  };

  const handleCreateAccount = () => {
    if (!passwordMatch) {
      console.log('Password and Retype Password do not match');
      return;
    }

    const accountData = {
      username: username,
      password: password,
      email: email,
      first_name: firstName,
      last_name: lastName,
    };

    fetch('http://localhost:3001/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(accountData),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Account created successfully');
          navigate('/home');
        } else {
          console.error('Failed to create account');
          // Handle the error case, display an error message, etc.
        }
      })
      .catch((error) => {
        console.error('Error creating account:', error);
        // Handle the error case, display an error message, etc.
      });
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowRetypePassword = () => {
    setShowRetypePassword(!showRetypePassword);
  };

  return (
    <div className={`flex flex-col items-center justify-center h-screen ${currentMode === 'Dark' ? 'dark' : ''}`}>
      <div
        className={`w-72 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-lg shadow-lg p-8 ${
          currentMode === 'Light' ? 'bg-gray-300' : ''
        }`}
      >
        <h1 className="text-3xl font-bold mb-4 text-center">Create Account</h1>
        <input
          type="text"
          className={`w-full border border-gray-300 rounded-md px-3 py-2 mb-4 ${
            currentMode === 'Dark' ? 'text-black' : ''
          }`}
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
        />
        <input
          type="text"
          className={`w-full border border-gray-300 rounded-md px-3 py-2 mb-4 ${
            currentMode === 'Dark' ? 'text-black' : ''
          }`}
          placeholder="First Name"
          value={firstName}
          onChange={handleFirstNameChange}
        />
        <input
          type="text"
          className={`w-full border border-gray-300 rounded-md px-3 py-2 mb-4 ${
            currentMode === 'Dark' ? 'text-black' : ''
          }`}
          placeholder="Last Name"
          value={lastName}
          onChange={handleLastNameChange}
        />
        <input
          type="email"
          className={`w-full border border-gray-300 rounded-md px-3 py-2 mb-4 ${
            currentMode === 'Dark' ? 'text-black' : ''
          }`}
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            className={`w-full border border-gray-300 rounded-md px-3 py-2 mb-4 ${
              currentMode === 'Dark' ? 'text-black' : ''
            }`}
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <div className="absolute right-3 top-3 cursor-pointer" onClick={toggleShowPassword}>
            {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
          </div>
        </div>
        <div className="relative">
          <input
            type={showRetypePassword ? 'text' : 'password'}
            className={`w-full border border-gray-300 rounded-md px-3 py-2 mb-4 ${
              currentMode === 'Dark' ? 'text-black' : ''
            }`}
            placeholder="Retype Password"
            value={retypePassword}
            onChange={handleRetypePasswordChange}
          />
          <div className="absolute right-3 top-3 cursor-pointer" onClick={toggleShowRetypePassword}>
            {showRetypePassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
          </div>
        </div>
        {!passwordMatch && (
          <p className="text-red-500 mb-4 text-sm">Password and Retype Password do not match</p>
        )}
        <button
          type="button"
          className={`bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2 mt-2 transition-colors duration-300`}
          onClick={handleCreateAccount}
          style={{ backgroundColor: currentColor }}
        >
          Create Account
        </button>
      </div>
    </div>
  );
};

export default CreateAccount;
