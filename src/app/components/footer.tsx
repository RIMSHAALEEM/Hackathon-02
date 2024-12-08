import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

import Image from 'next/image';
import logo from "@/app/public/Logo Icon.png"
import payment from "@/app/public/payment.png"




const footer = () => {
  return (
  


    <footer className="bg-gray-50 py-10 px-20">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="flex flex-wrap justify-between">
          {/* Logo and About Section */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <Image alt="Logo" className="w-10 h-10" height="40" src={logo} width="40" />
            <span className="text-2xl font-bold text-black">Comforty</span>
          </div>
            <p className="text-gray-600">
              Vivamus tristique odio sit amet velit semper, eu posuere turpis
              interdum. Cras egestas purus.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className=" text-2xl text-gray-500 hover:text-teal-600 ">
                <i className="fab fa-facebook-f"><FaFacebook /></i>
              </a>
              <a href="#" className="text-2xl text-gray-500 hover:text-teal-600">
                <i className="fab fa-twitter"><FaTwitter /></i>
              </a>
              <a href="#" className="text-2xl text-gray-500 hover:text-teal-600">
                <i className="fab fa-instagram"><FaInstagram />
                </i>
              </a>
              <a href="#" className="text-2xl text-gray-500 hover:text-teal-600">
                <i className="fab fa-pinterest"><FaPinterest />
                </i>
              </a>
              <a href="#" className="text-2xl text-gray-500 hover:text-teal-600">
                <i className="fab fa-youtube"><FaYoutube />
                </i>
              </a>
            </div>
          </div>

          {/* Category Section */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
            <h3 className="text-lg font-semibold text-gray-500 mb-4">Category</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-800 hover:text-teal-600">
                  Sofa
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-900 hover:text-teal-600">
                  Armchair
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-900 hover:text-teal-600">
                  Wing Chair
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-900 hover:text-teal-600">
                  Desk Chair
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-900 hover:text-teal-600">
                  Wooden Chair
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-900 hover:text-teal-600">
                  Park Bench
                </a>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
            <h3 className="text-lg font-semibold text-gray-500 mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-900 hover:text-teal-600">
                  Help & Support
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-900 hover:text-teal-600">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-900 hover:text-teal-600">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-900 hover:text-teal-600">
                  Help
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
          <h3 className="text-lg font-semibold text-gray-500 mb-4">
              Newsletter
            </h3>
            <form className="flex items-center space-x-4">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-teal-500"
              />
              <button className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700">
                Subscribe
              </button>
            </form>
            <p className="text-gray-600 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tincidunt erat enim.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-gray-300 pt-4 flex flex-wrap justify-between items-center text-gray-500 text-sm">
          <p>© 2021 - Blogy – Designed & Developed by Zokirsoft</p>
          <div className="flex space-x-4">
            <Image
              src={payment}
              alt="PayPal"
              className="h-6"
            />
            {/* <img
              src="/mastercard.png"
              alt="Mastercard"
              className="h-6"
            />
            <img
              src="/visa.png"
              alt="Visa"
              className="h-6"
            /> */}
          </div>
        </div>
      </div>
    </footer>
  );
};



export default footer
