"use client";



import Link from 'next/link';
import React, { useState } from 'react';
import { CiHeart } from "react-icons/ci";
import { IoCartOutline, IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='shadow-sm mx-auto flex flex-col bg-[#FBEBB5]'>
      {/* Main navigation */}
      <div className='flex justify-between items-center px-8 py-4'>
        <h1 className='text-3xl font-bold'>Furniture</h1>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex space-x-8 items-center text-2xl'>
          <Link href={"/"} className='text-slate-600 hover:text-black'>Home</Link>
          <Link href={"/Shop"} className='text-slate-600 hover:text-black'>Shop</Link>
          <Link href={"/about"} className='text-slate-600 hover:text-black'>About</Link>
          <Link href={"/signup"} className='text-slate-600 hover:text-black'>Contact</Link>
        </nav>

        {/* Icons */}
        <div className='flex space-x-3 justify-center items-center font-bold text-2xl'>
          <FaRegUser />
          <IoSearch />
          <CiHeart className='text-3xl font-bold' />
          <IoCartOutline className='text-3xl' />
          {/* Hamburger Icon */}
          <button
            className='md:hidden text-3xl text-slate-600'
            onClick={toggleMenu}
          >
            {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav
        className={`${
          isOpen ? 'flex' : 'hidden'
        } flex-col items-center space-y-4 md:hidden bg-[#FBEBB5] text-2xl py-4`}
      >
        <Link href={"/home"} className='text-slate-600 hover:text-black' onClick={toggleMenu}>Home</Link>
        <Link href={"/contact"} className='text-slate-600 hover:text-black' onClick={toggleMenu}>Shop</Link>
        <Link href={"/about"} className='text-slate-600 hover:text-black' onClick={toggleMenu}>About</Link>
        <Link href={"/signup"} className='text-slate-600 hover:text-black' onClick={toggleMenu}>Contact</Link>
      </nav>
    </header>
  );
};

export default Navbar;
