import React, { useState, useEffect } from 'react';

const Setting = ({ currentUser }) => {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [caloriesBurntGoal, setCaloriesBurntGoal] = useState('');
  const [caloriesIntakeGoal, setCaloriesIntakeGoal] = useState('');

  useEffect(() => {
    const fetchUserSettings = async () => {
      try {
        const response = await fetch('http://localhost:3001/user-profile', {
          credentials: 'include', // Include cookies in the request
        });
        if (response.ok) {
          const settings = await response.json();
          setName(settings.first_name);
          setLastname(settings.last_name);
          setEmail(settings.email);
          setCaloriesBurntGoal(settings.calories_burnt_goal);
          setCaloriesIntakeGoal(settings.calories_intake_goal);
        }
      } catch (error) {
        console.error('Error fetching user settings:', error);
      }
    };

    fetchUserSettings();
  }, []);

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

  const handleSaveSettings = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/update-settings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name: name,
          last_name: lastname,
          email,
          calories_burnt_goal: caloriesBurntGoal,
          calories_intake_goal: caloriesIntakeGoal,
        }),
        credentials: 'include', // Include cookies in the request
      });

      if (response.ok) {
        console.log('Settings saved successfully');
      } else {
        console.error('Error saving settings:', response.statusText);
      }
    } catch (error) {
      console.error('Error saving settings:', error);
    }
  };

  return (
    <div className="mt-16 flex justify-center items-center">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4">User Settings</h1>
        <form className="max-w-sm mx-auto" onSubmit={handleSaveSettings}>
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
            <label htmlFor="lastname" className="block font-semibold mb-1">
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
    </div>
  );
};

export default Setting;
