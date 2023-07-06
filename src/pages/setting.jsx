import React, { useState } from 'react';

const Setting = () => {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [caloriesBurntGoal, setCaloriesBurntGoal] = useState('');
  const [caloriesIntakeGoal, setCaloriesIntakeGoal] = useState('');

//   useEffect(() => {
//     // Load saved user settings from local storage
//     const savedSettings = JSON.parse(localStorage.getItem('userSettings'));
//     if (savedSettings) {
//       setName(savedSettings.name);
//       setEmail(savedSettings.email);
//       setCaloriesBurntGoal(savedSettings.caloriesBurntGoal);
//       setCaloriesIntakeGoal(savedSettings.caloriesIntakeGoal);
//     }
//   }, []);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleLastnameChange = (e) => {
    setLastname(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCaloriesBurntGoalChange = (e) => {
    setCaloriesBurntGoal(e.target.value);
  };

  const handleCaloriesIntakeGoalChange = (e) => {
    setCaloriesIntakeGoal(e.target.value);
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
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">User Settings</h1>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block font-semibold mb-1">
            Name
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
            Email
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
            Calories Burnt Goal
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
            Calories Intake Goal
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
  );
};

export default Setting;
