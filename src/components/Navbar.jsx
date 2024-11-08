// Navbar.jsx
import React from "react";

import logo from "../assets/logo.svg"



import { FiSearch,FiMenu } from "react-icons/fi";
const Navbar = ({ setSearchQuery }) => {
  
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    




<div className="flex flex-col items-center w-full">
  {/* Web Navbar (Hidden on mobile) */}
  <nav className="bg-white p-2 hidden md:flex items-center justify-between max-w-6xl w-full">
    {/* Logo */}
    <div className="flex items-center h-10">
      <img
        src={logo} 
        alt="Logo"
        className="h-32 w-auto"
      />
    </div>

    {/* Search Bar */}
    <div className="flex-1 max-w-2xl">
      <div className="relative">
        <span className="absolute inset-y-0 left-3 flex items-center">
          <FiSearch className="text-gray-400 h-5 w-5" />
        </span>
        <input
          type="text"
          placeholder="Search for movies, Events, Plays, Sports and Activities"
          className="w-full px-10 py-2 border text-black text-sm outline-none placeholder-gray-400"
          onChange={handleInputChange}
        />
      </div>
    </div>

    {/* Sign In Button and Hamburger Icon */}
    <div className="flex items-center space-x-4 md:ml-5">
      <button className="bg-[#F84464] text-white px-4 py-1 rounded-md text-sm">
        Sign in
      </button>
      <FiMenu className="text-gray-500 h-6 w-6 cursor-pointer" />
    </div>
  </nav>

  {/* Mobile Navbar  */}
  <div className="bg-white p-2 w-full md:hidden flex items-center justify-between">
    
    <h1 className="text-lg font-semibold text-gray-700">Welcome Guest!</h1>

   
    <div className="relative w-full flex-1 ml-4">
      <input
        type="text"
        placeholder="Search for movies"
        className="w-full px-10 py-2  text-black text-sm outline-none placeholder-gray-400"
        onChange={handleInputChange}
      />
      <span className="absolute inset-y-0 right-3 flex items-center">
        <FiSearch className="text-gray-500 h-5 w-5" />
      </span>
    </div>
  </div>
</div>

  

  );
};

export default Navbar;
