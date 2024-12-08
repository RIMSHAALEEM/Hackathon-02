import React from 'react'
import Image from 'next/image'
import image1 from "@/app/public/img1.png"
import image2 from "@/app/public/img2.png"
import image3 from "@/app/public/img3.png"
import image4 from "@/app/public/img4.png"

const AboutUs = () => {
  return (
    <div className="px-4 py-8 lg:py-16 bg-white mx-auto lg:mx-52">
    {/* About Us Section */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
      <div className="bg-teal-700 text-white p-8 rounded-lg flex flex-col">
        <h2 className="text-3xl font-bold mb-4">About Us - Comforty</h2>
        <p className="mb-6">
          At Comforty, we believe that the right chair can transform your
          space and elevate your comfort. Specializing in ergonomic design,
          premium materials, and modern aesthetics, we craft chairs that
          seamlessly blend style with functionality.
        </p>
        <button className="w-full sm:w-44 py-3 mt-auto bg-teal-800 text-white px-6 rounded hover:bg-gray-100">
          View collection
        </button>
      </div>
      <div className="flex items-stretch">
        <Image
          src={image3}
          alt="Chair"
          className="rounded-lg shadow-md object-cover w-full"
        />
      </div>
    </div>
  
    {/* Brand Difference Section */}
    <div className="mt-16 text-center">
      <h2 className="text-2xl font-bold mb-8">What Makes Our Brand Different</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2 text-teal-600">Next day as standard</h3>
          <p className="text-teal-600">
            Order before 3pm and get your order the next day as standard.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2 text-teal-600">Made by true artisans</h3>
          <p className="text-teal-600">
            Handmade crafted goods made with real passion and craftsmanship.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2 text-teal-600">Unbeatable prices</h3>
          <p className="text-teal-600">
            For our materials and quality, you won’t find better prices anywhere.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2 text-teal-600">Recycled packaging</h3>
          <p className="text-teal-600">
            We use 100% recycled to ensure our footprint is more manageable.
          </p>
        </div>
      </div>
    </div>
  
    {/* Popular Products Section */}
    <div className="mt-16 text-center">
      <h2 className="text-2xl font-bold mb-8">Our Popular Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="shadow-md rounded-lg overflow-hidden">
          <Image
            src={image4}
            alt="Product 1"
            className="w-full h-64 object-cover"  // Set fixed height and cover the image
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2">The Popular suede sofa</h3>
            <p className="text-teal-600 font-bold">$99.00</p>
          </div>
        </div>
        <div className="shadow-md rounded-lg overflow-hidden">
          <Image
            src={image1}
            alt="Product 2"
            className="w-full h-64 object-cover"  // Set fixed height and cover the image
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2">The Dandy chair</h3>
            <p className="text-teal-600 font-bold">$99.00</p>
          </div>
        </div>
        <div className="shadow-md rounded-lg overflow-hidden">
          <Image
            src={image2}
            alt="Product 3"
            className="w-full h-64 object-cover"  // Set fixed height and cover the image
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2">The Dandy chair</h3>
            <p className="text-teal-600 font-bold">$99.00</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
     
    
  )
}

export default AboutUs
