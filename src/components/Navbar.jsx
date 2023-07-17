import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import ironman from '../data/ironman.jpg';
import { Notification } from '.';
import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = ({ onLogout }) => {
  const { currentColor, activeMenu, setActiveMenu, handleClick, isClicked, currentUser } = useStateContext();

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
      <NavButton
        title="Menu"
        customFunc={handleActiveMenu}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />
      <div className="flex items-center gap-2">
        <NavButton
          title="Notification"
          dotColor="rgb(254, 201, 15)"
          customFunc={() => handleClick('notification')}
          color={currentColor}
          icon={<RiNotification3Line />}
        />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg">
            <img className="rounded-full w-8 h-8" src={ironman} alt="user-profile" />
            <p className="text-gray-400 text-14">
              {currentUser ? `Hi, ${currentUser.username}!` : 'Hi, Please Log in!'}
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>
        <button
          type="button"
          className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
          style={{ color: currentColor }}
          onClick={onLogout}
        >
          Logout
        </button>
        {isClicked.notification && <Notification />}
      </div>
    </div>
  );
};

export default Navbar;
