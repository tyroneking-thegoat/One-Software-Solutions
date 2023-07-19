import React from 'react';
import { FiShoppingBag, FiEdit, FiPieChart, FiBarChart, FiCreditCard, FiStar, FiShoppingCart } from 'react-icons/fi';
import {BsCurrencyDollar, BsShield, BsChatLeft } from 'react-icons/bs';
import { IoMdContacts, IoIosSearch } from 'react-icons/io';
import { WiAlien } from "react-icons/wi";

import ironman from './ironman.jpg';
import nick from './nick.jpg';
import thanos from './thanos.jpg';

export const gridOrderImage = (props) => (
  <div>
    <img
      className="rounded-xl h-20 md:ml-3"
      src={props.ProductImage}
      alt="order-item"
    />
  </div>
);

export const gridOrderStatus = (props) => (
  <button
    type="button"
    style={{ background: props.StatusBg }}
    className="text-white py-1 px-2 capitalize rounded-2xl text-md"
  >
    {props.Status}
  </button>
);


export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'home',
        icon: <WiAlien />,
      },
    ],
  },

  {
    title: 'Pages',
    links: [
      {
        name: 'Setting',
        icon: <IoMdContacts/>,
      },
      {
        name: 'Search',
        icon: <IoIosSearch/>,
      },
      
    ],
  },
  
];


export const chatData = [
  {
    image:
      nick,
    message: 'Welcome to the Team!',
    desc: 'Cardio weekend !',
    time: '9:08 AM',
  },
  {
    image:
      thanos,
    message: 'New message received',
    desc: 'Thanos invited you to his group',
    time: '11:56 AM',
  }
];


export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#00853E',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
];

export const userProfileData = [
  {
    icon: <BsCurrencyDollar />,
    title: 'My Profile',
    desc: 'Account Settings',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
  },
  {
    icon: <BsShield />,
    title: 'My Inbox',
    desc: 'Messages & Emails',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
  },
  {
    icon: <FiCreditCard />,
    title: 'My Tasks',
    desc: 'To-do and Daily Tasks',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
  },
];


export const dropdownData = [
  {
    Id: '1',
    Time: 'March 2021',
  },
  {
    Id: '2',
    Time: 'April 2021',
  }, {
    Id: '3',
    Time: 'May 2021',
  },
];



export const pieChartData = [
  ["Calories", "totalcalories"],
  ["Calories Burned", 0],
  ["Calories Consumed", 0],
  ["Exercise Goal", 0],
  ["Intake Goal", 0],
];

export const contextMenuItems = [
  'AutoFit',
  'AutoFitAll',
  'SortAscending',
  'SortDescending',
  'Copy',
  'Edit',
  'Delete',
  'Save',
  'Cancel',
  'PdfExport',
  'ExcelExport',
  'CsvExport',
  'FirstPage',
  'PrevPage',
  'LastPage',
  'NextPage',
];

export const ecomPieChartData = [
  { x: '2018', y: 18, text: '35%' },
  { x: '2019', y: 18, text: '15%' },
  { x: '2020', y: 18, text: '25%' },
  { x: '2021', y: 18, text: '25%' },
];

export const CaloriesBurntPie = [
  ["Calories", "totalcalories"],
  ["Calories Burned", 400],
  ["Calories Consumed", 0],
  ["Exercise Goal", 450], // replace 450 with the actual calorie burn goal minus today's logged calorie burn (400 in this example)
  ["Intake Goal", 0],
];

export const CaloriesIntakePie = [
  ["Calories", "totalcalories"],
  ["Calories Burned", 0],
  ["Calories Consumed", 200],
  ["Exercise Goal", 0],
  ["Intake Goal", 850], // replace 850 with the actual calorie intake goal minus today's logged calorie intake (200 in this example)
];




