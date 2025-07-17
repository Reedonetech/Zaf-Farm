import React, { useState } from "react";
import { Menu, Settings, LogOutIcon } from "lucide-react";
import { AiOutlineTransaction } from "react-icons/ai";
import { FaGrinStars } from "react-icons/fa";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import Navbar from './Navbar';
import StaffName from "../Component/StaffName";
import '../App.css';

// Import your existing StaffPage component
import Staff from '../Component/Staff'; // Replace with the correct path to your StaffPage component
// import Navbar2 from "./Navbar2";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(true);
  const [showStaffMenu, setShowStaffMenu] = useState(false);
  const [showStaffPage, setShowStaffPage] = useState(false); // Toggle visibility of StaffPage
  // const [showNavbar, setShowNavbar] = useState(true);
  const [ShowstaffName, setStaffName] = useState(false);
  const [showTransactionMenu, setShowTransactionMenu] = useState(false);
  const [showdashboard, setShowdashboard] = useState(false);
  const [notClick, setNotclick] = useState(true)

  const toggleSidebar = () => setCollapsed(!collapsed);

  const menuItems = [
    { icon: <Settings size={20} />, label: "Settings" },
    { icon: <LogOutIcon size={20} />, label: "Logout" },
  ];

  // Handle toggling StaffPage visibility
  const handleRegisterStaffClick = () => {
    setShowStaffPage(true); // Display the StaffPage
    // setShowNavbar(false);
    setStaffName(false); // Hide the StaffName component
    setShowdashboard(false);
    setNotclick(false)
  };
  const handleStaffNameClick = () => {
    setStaffName(true); // Display the StaffPage
    // setShowNavbar(false);
    setShowStaffPage(false); 
    setShowdashboard(false);
    setNotclick(false)
  }
  const handleShowDashboard = () => {
    setStaffName(false); // Display the StaffPage
    // setShowNavbar(false);
    setShowStaffPage(false); // Hide the StaffName component
    setShowdashboard(true); // Hide the StaffName component
    setNotclick(false)
  }


  
  

  return (
    <div className="flex h-screen">
      <div
        className={`bg-[#d2c5c5] transition-all duration-300 ease-in-out ${collapsed ? "w-20" : "w-60"} flex flex-col justify-between`}>
        <div className="flex items-center justify-between p-4">
          <button onClick={toggleSidebar}><Menu size={20} /></button>
          {!collapsed && <span className="text-xl font-semibold">Admin</span>}
        </div>
        <div className="flex flex-col items-center px-4 gap-5">
          <button onClick={handleShowDashboard} className="w-full flex items-center justify-center bg-white rounded-full p-2 hover:bg-gray-200 transition">
            <span className="text-xl">{<MdOutlineDashboardCustomize />}</span>
            {!collapsed && <span className="ml-2">Dashboard</span>}
          </button>

          <button
            className="w-full flex items-center justify-center bg-white rounded-full p-2 hover:bg-gray-200 transition"
            onClick={() => setShowStaffMenu(!showStaffMenu)}
          >
            <span className="text-xl">{<FaGrinStars />}</span>
            {!collapsed && <span className="ml-2">Staff</span>}
          </button>
          {showStaffMenu && !collapsed && (
            <div className="w-full mt-2 bg-white p-4 rounded shadow-md">
              <button
                className="block lg:w-full w-[30vw] rounded text-left p-2 hover:bg-gray-200 transition"
                onClick={handleRegisterStaffClick} // Handle showing staff page
              >
                Register Staff
              </button>
              <button className="block w-full text-left p-2 hover:bg-gray-200 transition" onClick={handleStaffNameClick}>
                All Staff
              </button>
            </div>
          )}

          {/* Transaction Button */}
          <button
            className="w-full flex items-center justify-center bg-white rounded-full p-2 hover:bg-gray-200 transition"
            onClick={() => setShowTransactionMenu(!showTransactionMenu)}
          >
            <span className="text-xl">{<AiOutlineTransaction />}</span>
            {!collapsed && <span className="ml-2">Transaction</span>}
          </button>
        </div>

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
      </div>

      {/* Main content */}
      <div className="flex-1 p-6 z-0 relative">
        {notClick && <Navbar/>}
        {showdashboard && <Navbar />} {/* Conditionally render the Navbar component */}

        {/* Conditionally render the StaffPage component */}
        {showStaffPage && <Staff />} {/* Render your existing StaffPage here */}
        {ShowstaffName && <StaffName />}
        
        
      </div>
    </div>
  );
}
