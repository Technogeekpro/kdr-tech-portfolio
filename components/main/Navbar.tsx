"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="w-full fixed top-0 shadow-lg z-50">
      <div className="w-full h-[65px] flex items-center justify-between px-6 md:px-10 bg-white bg-opacity-5 backdrop-blur-md">
        <a href="#home" className="flex items-center">
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={40}
            height={40}
            className="cursor-pointer"
          />
        </a>

        <div className="absolute left-1/2 transform -translate-x-1/2">
          <span className="font-bold text-center text-white">KDR TECH</span>
        </div>

        <div className="hidden md:flex space-x-6">
          <a href="#about" className="text-white hover:text-gray-600">
            About
          </a>
          <a href="#services" className="text-white hover:text-gray-600">
            Services
          </a>
          <a href="#contact" className="text-white hover:text-gray-600">
            Contact
          </a>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={toggleDrawer} className="text-white z-50">
            {isDrawerOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 w-full h-full bg-gray-800 bg-opacity-75 z-40 transform ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="absolute top-4 right-4 z-50">
          <button onClick={toggleDrawer} className="text-white">
            <FaTimes size={24} />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-full">
          <a
            href="#about"
            className="text-white text-2xl mb-4"
            onClick={toggleDrawer}
          >
            About
          </a>
          <a
            href="#services"
            className="text-white text-2xl mb-4"
            onClick={toggleDrawer}
          >
            Services
          </a>
          <a
            href="#contact"
            className="text-white text-2xl mb-4"
            onClick={toggleDrawer}
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
