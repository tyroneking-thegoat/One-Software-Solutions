import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosMore, IoIosFitness } from 'react-icons/io';
import { Link } from 'react-router-dom';

import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

import { Stacked, Pie, Button, LineChart, SparkLine } from '../components';
import { exercisesData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, CaloriesBurntPie, CaloriesIntakePie } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import product9 from '../data/product9.jpg';


const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent id="time" fields={{ text: 'Time', value: 'Id' }} style={{ border: 'none', color: (currentMode === 'Dark') && 'white' }} value="1" dataSource={dropdownData} popupHeight="220px" popupWidth="120px" />
  </div>
);

const Home = () => {
  const { currentColor, currentMode } = useStateContext();

  return (
  
    <div className="mt-12">
      <div className="flex gap-5 flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-2xl w-full lg:w-full p-8 pt-9 m-4 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">My Workout</p>
              <p className="text-2xl">1500/1800 Cal</p>
            </div>

           
              {/* not working yet
              <Pie id="pie-chart" data={CaloriesBurntPie} legendVisiblity={false} height="160px" /> */}
       
            <Link to="/setting" className="text-2xl opacity-0.9"> 
            <button
              type="button"
              style={{ backgroundColor: currentColor }}
              className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"
            >
              <IoIosFitness/>
            </button>
            </Link>

          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor={currentColor}
              text="Log Exercise"
              borderRadius="10px"
            />
          </div>
        </div>

        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-2xl w-full lg:w-full p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">My Calories </p>
              <p className="text-2xl">1000/1200 Cal</p>
            </div>

           
              {/* not working yet
              <Pie id="pie-chart" data={CaloriesBurntPie} legendVisiblity={false} height="160px" /> */}
       
            <Link to="/setting" className="text-2xl opacity-0.9"> 
            <button
              type="button"
              style={{ backgroundColor: currentColor }}
              className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"
            >
              <IoIosFitness/>
            </button>
            </Link>
            
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor={currentColor}
              text="Log Food"
              borderRadius="10px"
            />
          </div>
        </div>


      </div>
      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-full  ">
          <div className="flex justify-between"></div>
      <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-full p-8 m-3 flex justify-center items-center gap-10">
            <div>
              <p className="text-3xl font-semibold ">Today's Calorie Intake Goal</p>
            </div>

            <div className="w-80">
              <Pie id="piechart" data={CaloriesIntakePie} legendVisiblity={false} height="300px" />
            </div>
          </div>
        </div>
      </div>


      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-full  ">
          <div className="flex justify-between"></div>
      <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-full p-8 m-3 flex justify-center items-center gap-10">
            <div>
              <p className="text-3xl font-semibold ">Today's Calorie Burn Goal</p>
            </div>

            <div className="w-60">
              <Pie id="piechart" data={CaloriesBurntPie} legendVisiblity={false} height="300px" />
            </div>
          </div>
        </div>
      </div>

        <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-full  ">
          <div className="flex justify-between"></div>
      <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-full p-8 m-3 flex justify-center items-center gap-10">
            <div>
              <p className="text-3xl font-semibold ">Calories Intake</p>
              <p className="text-gray-400">Summary</p>
            </div>

            <div className="w-60">
              <Pie id="pie-chart1" data={CaloriesIntakePie} legendVisiblity={false} height="300px" />
            </div>
          </div>
        </div>
        </div>

      <div className="flex gap-10 m-6 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg w-full justify-center p-6 rounded-2xl">
          
            <div className="mt-10">
            <img
              className="md:w-full justify-center h-50 "
              src={product9}
              alt=""
            />
            <div className="mt-8">
              <p className="font-semibold text-lg">More Recommendations </p>
              <p className="text-gray-400 ">By OSS</p>
              <p className="mt-8 text-sm text-gray-400">
                This will be the small description for the news you have shown
                here. There could be some great info.
              </p>
              <div className="mt-3">
              <Link to="/search" className="text-2xl opacity-0.9"> 
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Search"
                  borderRadius="10px"
                />
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
