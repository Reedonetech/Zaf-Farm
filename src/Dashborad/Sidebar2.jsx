import { LogOutIcon, Settings } from 'lucide-react';
import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import { Menu } from 'lucide-react';
import { AiOutlineTransaction } from 'react-icons/ai';
import { FaGrinStars } from 'react-icons/fa';
import { MdOutlineDashboardCustomize } from 'react-icons/md';


const Sidebar2 = ({handleClick}) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleSidebar = () => setCollapsed(!collapsed);
  const [showStaffMenu, setShowStaffMenu] = useState(false);
  // const [showStaffPage, setShowStaffPage] = useState(false); // Toggle visibility of StaffPage
  const [showTransactionMenu, setShowTransactionMenu] = useState(false);
  
  
  const menuItems = [
    { icon: <Settings size={20} />, label: "Settings" },
    { icon: <LogOutIcon size={20} />, label: "Logout" },
  ];

  const handleRegisterStaffClick = () => {
    // setShowStaffPage(true); // Display the StaffPage
    setShowStaffMenu(false); // Hide the Staff menu
  }
  const handleStaffNameClick = () => {
    // setShowStaffPage(false); // Hide the StaffPage
    setShowStaffMenu(false); // Hide the Staff menu
  }

  const handleButtonClick = () => {
    handleClick();
    handlehide();
    
  };
  const handlehide = () => {
    setCollapsed(!collapsed);
  }
  return (
    <div className='lg:block hidden'>
      <div>
        <div className="flex items-center justify-between p-4">
          <button onClick={toggleSidebar}><Menu size={20} /></button>
          {!collapsed && <span className="text-xl font-semibold">Admin</span>}
        </div>
        <div className="flex flex-col items-center px-4 gap-5">
          <button className="w-full flex items-center justify-center bg-white rounded-full p-2 hover:bg-gray-200 transition">
          <span className="text-xl">{<MdOutlineDashboardCustomize />}</span>
          {!collapsed && <span className="ml-2">Dashboard</span>}
          </button>
        
          <button className="w-full flex items-center justify-center bg-white rounded-full p-2 hover:bg-gray-200 transition"onClick={() => setShowStaffMenu(!showStaffMenu)}>
            <span className="text-xl">{<FaGrinStars />}</span>
            {!collapsed && <span className="ml-2">Staff</span>}
          </button>
          {showStaffMenu && !collapsed && (
          <div className="w-full mt-2 bg-white p-4 rounded shadow-md">
            <link rel="stylesheet" href="/dashboard/staff" /><button className="block lg:w-full w-[35vw] rounded text-left p-2 hover:bg-gray-200 transition" onClick={handleRegisterStaffClick}> 
              Register Staff
            </button>
            <button className="block w-full text-left p-2 hover:bg-gray-200 transition" onClick={handleStaffNameClick}>
               All Staff
            </button>
          </div>
          )}
        
                  {/* Transaction Button */}
          <button className="w-full flex items-center justify-center bg-white rounded-full p-2 hover:bg-gray-200 transition"onClick={() => setShowTransactionMenu(!showTransactionMenu)}>
            <span className="text-xl">{<AiOutlineTransaction />}</span>{!collapsed && <span className="ml-2">Transaction</span>}
          </button>
        </div>

        <button onClick={handleButtonClick}>=</button>

        <div>
          {/* Menu */}
        <div className="flex flex-col items-center gap-6 mt-auto">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className="flex items-center gap-2 w-full hover:text-blue-600 transition text-gray-800"
            >
              {item.icon}
              {!collapsed && <span>{item.label}</span>}
            </button>
          ))}
        </div>
          {/* <a href="/dashboard/staffname">StaffName</a> */}
          {/* <a href=""></a> */}
        </div>
      </div>
    </div>
  )
}

export default Sidebar2