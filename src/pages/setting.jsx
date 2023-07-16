import React, { useState, useEffect, createContext, useContext } from 'react';

const UserSettingsContext = createContext ();

const Settings = () => {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [caloriesBurntGoal, setCaloriesBurntGoal] = useState('');
  const [caloriesIntakeGoal, setCaloriesIntakeGoal] = useState('');

  useEffect(() => {
    // Load saved user settings from local storage
    const savedSettings = JSON.parse(localStorage.getItem('userSettings'));
    if (savedSettings) {
      setName(savedSettings.name);
      setLastname(savedSettings.lastname);
      setEmail(savedSettings.email);
      setCaloriesBurntGoal(savedSettings.caloriesBurntGoal);
      setCaloriesIntakeGoal(savedSettings.caloriesIntakeGoal);
    }
  }, []);

  const handleNameChange = (e) => {
    setName(e.target.value);
    saveSettingsToLocalStorage({ name: e.target.value });
  };

  const handleLastnameChange = (e) => {
    setLastname(e.target.value);
    saveSettingsToLocalStorage({ lastname: e.target.value });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    saveSettingsToLocalStorage({ email: e.target.value });
  };

  const handleCaloriesBurntGoalChange = (e) => {
    setCaloriesBurntGoal(e.target.value);
    saveSettingsToLocalStorage({ caloriesBurntGoal: e.target.value });
  };

  const handleCaloriesIntakeGoalChange = (e) => {
    setCaloriesIntakeGoal(e.target.value);
    saveSettingsToLocalStorage({ caloriesIntakeGoal: e.target.value });
  };

  //this const will save data to local storage
  const saveSettingsToLocalStorage = (settings) => {
    // Load the existing user settings from local storage
    const savedSettings = JSON.parse(localStorage.getItem('userSettings')) || {};
  
    // Update each field separately
    if (settings.name) savedSettings.name = settings.name;
    if (settings.lastname) savedSettings.lastname = settings.lastname;
    if (settings.email) savedSettings.email = settings.email;
    if (settings.caloriesBurntGoal) savedSettings.caloriesBurntGoal = settings.caloriesBurntGoal;
    if (settings.caloriesIntakeGoal) savedSettings.caloriesIntakeGoal = settings.caloriesIntakeGoal;
  
    // Save the updated settings back to local storage
    localStorage.setItem('userSettings', JSON.stringify(savedSettings));
  
    // Save the name separately to the local storage
    if (settings.name) localStorage.setItem('name', settings.name);
    if (settings.lastname) localStorage.setItem('lastname', settings.lastname);
    if (settings.email) localStorage.setItem('email', settings.email);
    if (settings.caloriesBurntGoal) localStorage.setItem('caloriesBurntGoal', settings.caloriesBurntGoal);
    if (settings.caloriesIntakeGoal) localStorage.setItem('caloriesIntakeGoal', settings.caloriesIntakeGoal);
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save user settings to backend or perform necessary actions
    console.log({
      name,
      lastname,
      email,
      caloriesBurntGoal,
      caloriesIntakeGoal,
    });
  };



  return (
    <UserSettingsContext.Provider
      value={{
        name,
        lastname,
        email,
        caloriesBurntGoal,
        caloriesIntakeGoal,
      }}
    >

    

    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4 ml-12">User Settings</h1>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block font-semibold mb-1">
            First Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block font-semibold mb-1">
            Last Name
          </label>
          <input
            type="text"
            id="lastname"
            value={lastname}
            onChange={handleLastnameChange}
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-semibold mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="caloriesBurntGoal" className="block font-semibold mb-1">
            Calorie Burn Goal
          </label>
          <input
            type="number"
            id="caloriesBurntGoal"
            value={caloriesBurntGoal}
            onChange={handleCaloriesBurntGoalChange}
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="caloriesIntakeGoal" className="block font-semibold mb-1">
            Calorie Intake Goal
          </label>
          <input
            type="number"
            id="caloriesIntakeGoal"
            value={caloriesIntakeGoal}
            onChange={handleCaloriesIntakeGoalChange}
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Save Settings
        </button>
      </form>
    </div>
    </UserSettingsContext.Provider>
  );
};

export default Settings;
//export const UserSettingsContext = createContext();

export const UseSettingsContext = () => useContext(UserSettingsContext);