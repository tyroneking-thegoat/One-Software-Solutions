import React, { useEffect, useState } from 'react';
import { IoIosFitness } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { Chart } from 'react-google-charts';

import { Button } from '../components';
import { useStateContext } from '../contexts/ContextProvider';
import product9 from '../data/product9.jpg';

const Home = () => {
  const { currentColor, currentMode } = useStateContext();
  const [caloriesBurnt, setCaloriesBurnt] = useState(0);
  const [caloriesBurntGoal, setCaloriesBurntGoal] = useState(0);
  const [caloriesIntake, setCaloriesIntake] = useState(0);
  const [caloriesIntakeGoal, setCaloriesIntakeGoal] = useState(0);

  useEffect(() => {
    const fetchUserStats = async () => {
      try {
        const response = await fetch('http://localhost:3001/user-profile', {
          credentials: 'include',
        });

        if (response.ok) {
          const userStats = await response.json();
          setCaloriesBurnt(userStats.calories_burnt || 0);
          setCaloriesBurntGoal(userStats.calories_burnt_goal || 0);
          setCaloriesIntake(userStats.calories_intake || 0);
          setCaloriesIntakeGoal(userStats.calories_intake_goal || 0);
        }
      } catch (error) {
        console.error('Error fetching user stats:', error);
      }
    };

    fetchUserStats();
  }, []);

  const caloriesBurntPieData = [
    ['Category', 'Value'],
    ['Calories Burned', caloriesBurnt],
    ['Exercise Goal', caloriesBurntGoal - caloriesBurnt],
  ];

  const caloriesIntakePieData = [
    ['Category', 'Value'],
    ['Calories Consumed', caloriesIntake],
    ['Intake Goal', caloriesIntakeGoal - caloriesIntake],
  ];

  return (
    <div className="mt-12">
      <div className="flex gap-5 flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-2xl w-full lg:w-full p-8 pt-9 m-4 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">My Workout</p>
              <p className="text-2xl">{`${caloriesBurnt}/${caloriesBurntGoal} Cal`}</p>
            </div>
            <Link to="/setting" className="text-2xl opacity-0.9">
              <button
                type="button"
                style={{ backgroundColor: currentColor }}
                className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"
              >
                <IoIosFitness />
              </button>
            </Link>
          </div>
          <div className="mt-6">
            <Button color="white" bgColor={currentColor} text="Log Exercise" borderRadius="10px" />
          </div>
        </div>

        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-2xl w-full lg:w-full p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">My Calories</p>
              <p className="text-2xl">{`${caloriesIntake}/${caloriesIntakeGoal} Cal`}</p>
            </div>
            <Link to="/setting" className="text-2xl opacity-0.9">
              <button
                type="button"
                style={{ backgroundColor: currentColor }}
                className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"
              >
                <IoIosFitness />
              </button>
            </Link>
          </div>
          <div className="mt-6">
            <Button color="white" bgColor={currentColor} text="Log Food" borderRadius="10px" />
          </div>
        </div>
      </div>

      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-full">
          <div className="flex justify-between"></div>
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-full p-8 m-3 flex justify-center items-center gap-10">
            <div>
              <p className="text-3xl font-semibold">Today's Calorie Intake Goal</p>
            </div>

            <div className="w-80">
              <Chart
                width="100%"
                height="300px"
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={caloriesIntakePieData}
                options={{
                  title: "Today's Calorie Intake Goal",
                  pieHole: 0.4,
                  is3D: false,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-full">
          <div className="flex justify-between"></div>
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-full p-8 m-3 flex justify-center items-center gap-10">
            <div>
              <p className="text-3xl font-semibold">Today's Calorie Burn Goal</p>
            </div>

            <div className="w-60">
              <Chart
                width="100%"
                height="300px"
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={caloriesBurntPieData}
                options={{
                  title: "Today's Calorie Burn Goal",
                  pieHole: 0.4,
                  is3D: false,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-10 m-6 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg w-full justify-center p-6 rounded-2xl">
          <div className="mt-10">
            <img className="md:w-full justify-center h-50" src={product9} alt="" />
            <div className="mt-8">
              <p className="font-semibold text-lg">More Recommendations</p>
              <p className="text-gray-400">By OSS</p>
              <p className="mt-8 text-sm text-gray-400">
                This will be the small description for the news you have shown here. There could be some great info.
              </p>
              <div className="mt-3">
                <Link to="/search" className="text-2xl opacity-0.9">
                  <Button color="white" bgColor={currentColor} text="Search" borderRadius="10px" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
