// import React from 'react'
// import Image from 'next/image'
// import logo from "@/app/public/Logo Icon.png"


// import { IoCartOutline } from "react-icons/io5";

// const header = () => {
//   return (
    
//     <div>
//     {/* Top Bar */}
//     <div className="bg-indigo-900 text-white text-sm py-2 flex justify-around items-center px-4">
//      <div>
//       ✔ Free Shipping On All Orders Over $50
//      </div>
//      <div className="flex items-center space-x-4">
//       <div>
//        Eng
//        <i className="fas fa-chevron-down">
//        </i>
//       </div>
//       <div>
//        Faqs
//       </div>
//       <div>
//        Need Help
//       </div>
//      </div>
//     </div>
//     {/* Main Header */}
//     <div className="bg-gray-100 py-4">
//      <div className="container mx-auto flex justify-around items-center px-4 space-x-64">
//       <div className="flex items-center space-x-2">
//        <Image alt="Logo" className="w-10 h-10" height="40" src={logo} width="40"/>
//        <span className="text-2xl font-bold text-black">
//         Comforty
//        </span>
//       </div>
 
//       <div className="flex items-center space-x-4">
//        <div className="relative">
//         <button className="bg-white border border-gray-300  px-4 py-2 flex items-center space-x-2">
//          <i className="fas fa-shopping-cart">
//          <IoCartOutline />
//          </i>
//          <span>
//           Cart
//          </span>
//          <span className="bg-teal-600 text-white rounded-full px-2 py-1 text-xs">
//           2
//          </span>
//         </button>
//        </div>
    
//       </div>
//      </div>
//     </div>
//     <div className="flex flex-col sm:flex-row justify-around items-center p-4 ">
//                     <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
//                         <a href="#" className="text-gray-500">Home</a>
//                         <a href="#" className="text-gray-500">Shop</a>
//                         <a href="#" className="text-gray-500">Product</a>
//                         <a href="#" className="text-gray-500">Pages</a>
//                         <a href="#" className="text-gray-500">About</a>
//                     </div>
//                     <div className="text-gray-500 mt-2 sm:mt-0">
//                         Contact: <span className="text-black font-bold">(808) 555-0111</span>
//                     </div>
//                 </div>
//    </div>

//   )
// }

// export default header

"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import logo from "@/app/public/Logo Icon.png";
import { IoCartOutline } from "react-icons/io5";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { IoIosHelpCircleOutline } from "react-icons/io";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Top Bar */}
      <div className="bg-indigo-900 text-white text-sm py-2 flex justify-around items-center px-4">
        <div>✔ Free Shipping On All Orders Over $50</div>
        <div className="flex items-center space-x-4">
    <div className="flex items-center space-x-2">
     <span>Eng</span>
    <i className="text-white">
    <FaChevronDown />
    </i>
   </div>
          <a href="/faq"><div>Faqs</div></a>
    <div className="flex items-center space-x-2">
    <i className="text-white">
    <IoIosHelpCircleOutline />
    </i>
     <span>Need help</span>
    
   </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-gray-100 py-4">
        <div className="container  flex justify-around items-center px-4 mx-auto space-x-52">
          <div className="flex items-center space-x-2">
            <a href="/home"><Image alt="Logo" className="w-10 h-10" height="40" src={logo} width="40" /></a>
            <span className="text-2xl font-bold text-black">Comforty</span>
          </div>

          {/* Cart and Menu Button */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <a href="/cart"><button className="bg-white border border-gray-300 px-4 py-2 flex items-center space-x-2">
                <i className="fas fa-shopping-cart">
                  <IoCartOutline />
                </i>
                <span>Cart</span>
                <span className="bg-teal-600 text-white rounded-full px-2 py-1 text-xs">2</span>
              </button></a>
            </div>

            {/* Menu Button */}
            <button
              className="md:hidden flex items-center text-gray-700 text-2xl"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } md:flex flex-col md:flex-row justify-around items-center p-4 bg-gray-100 md:bg-transparent`}
      >
        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
          <a href="/home" className="text-gray-500 hover:text-teal-600">
            Home
          </a>
          <a href="/cart" target='_self' className="text-gray-500 hover:text-teal-600">
            Shop
          </a>
          <a href="/Product" className="text-gray-500 hover:text-teal-600">
            Product
          </a>
          <a href="/singleProductPage" className="text-gray-500 hover:text-teal-600">
            Pages
          </a>
          <a href="/about-us" target='_self' className="text-gray-500 hover:text-teal-600">
            About
          </a>
        </div>
        <div className="text-gray-500 mt-4 md:mt-0">
          <a href="/contact-us">Contact: <span className="text-black font-bold">(808) 555-0111</span></a>
        </div>
        
      </div>
      <div className='w-full h-4 text-slate-600'> <hr /></div>
    </div>
  );
};

export default Header;

