import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import Image from 'next/image';
import productimage from "@/app/public/Product Image.png"
import logo2 from "@/app/public/Logo (1).png"
import logo3 from "@/app/public/Logo (3).png"
import logo4 from "@/app/public/Logo (4).png"
import logo5 from "@/app/public/Logo (5).png"
import logo6 from "@/app/public/Logo (6).png"
import logo7 from "@/app/public/Logo (7).png"
import logo8 from "@/app/public/Logo (8).png"
import img1 from "@/app/public/img1.png"
import img2 from "@/app/public/img2.png"
import img3 from "@/app/public/img3.png"
import img4 from "@/app/public/img4.png"
import img5 from "@/app/public/img5.png"
import chair from "@/app/public/chair.png"
import chair2 from "@/app/public/chair2.png"
import chair3 from "@/app/public/chair3.png"
import img7 from "@/app/public/img7.jpg"
import img8 from "@/app/public/img8.jpg"
import img9 from "@/app/public/img9.png"
const Home = () => {
  return (
    <div className="bg-white  w-fit justify-center mx-auto rounded-3xl ">
      
      <div className="container bg-gray-100 rounded-3xl mx-auto p-12">
        <div className="">
          <div className="flex flex-col md:flex-row items-center justify-around">
            <div className="text-center md:text-left">
              <p className="text-black ml-4">WELCOME TO CHAIRY</p>
              <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4 inline-block p-2 ml-2">
                Best Furniture <br />Collection For Your <br /> Interior.
              </h1>
              <div className="flex items-center justify-center md:justify-start space-x-4">
                <a href="/cart"><button className="bg-teal-500 text-white px-4 py-2 ml-4 flex items-center">
                  Shop Now
                  <i className="fas fa-arrow-right ml-2"><FaArrowRight /></i>
                </button></a>
                
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <Image
                src={productimage}
                alt="A stylish modern chair"
                className=""
                width="300"
                height="300"
              />
            </div>
          </div>
        </div>
       
      </div>
      {/* companies logo section */}
       <div className=" bg-white flex justify-center items-center mt-8 space-x-12 pt-4">
          <Image
            src={logo2}
            alt="Zapier logo"
            width="100"
            height="50"
          />
          <Image
            src={logo3}
            alt="Pipedrive logo"
            width="100"
            height="50"
          />
          <Image
            src={logo4}
            alt="CIB Bank logo"
            width="100"
            height="50"
          />
          <Image
            src={logo5}
            alt="Zendesk logo"
            width="100"
            height="50"
          />
          <Image
            src={logo6}
            alt="Burnt Toast logo"
            width="100"
            height="50"
          />
          <Image
            src={logo7}
            alt="PandaDoc logo"
            width="100"
            height="50"
          />
          <Image
            src={logo8}
            alt="Moz logo"
            width="100"
            height="50"
          />
        </div>       

    {/* Popular Products Section */}
    <div className="mt-16 text-center bg-white">
      <h2 className="text-2xl font-bold mb-8">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="shadow-md rounded-lg overflow-hidden">
          <Image
            src={img4}
            alt="Product 1"
            className="w-full h-64 object-cover"  // Set fixed height and cover the image
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2">The PopLibrary Stool Chair</h3>
            <p className="text-teal-600 font-bold">$99.00</p>
          </div>
        </div>
        <div className="shadow-md rounded-lg overflow-hidden">
          <Image
            src={img1}
            alt="Product 2"
            className="w-full h-64 object-cover"  // Set fixed height and cover the image
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2">Library Stool Chair</h3>
            <p className="text-teal-600 font-bold">$99.00</p>
          </div>
        </div>
        <div className="shadow-md rounded-lg overflow-hidden">
          <Image
            src={img2}
            alt="Product 2"
            className="w-full h-64 object-cover"  // Set fixed height and cover the image
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2">Library Stool Chair</h3>
            <p className="text-teal-600 font-bold">$99.00</p>
          </div>
        </div>
        <div className="shadow-md rounded-lg overflow-hidden">
          <Image
            src={img1}
            alt="Product 2"
            className="w-full h-64 object-cover"  // Set fixed height and cover the image
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2">Library Stool Chair</h3>
            <p className="text-teal-600 font-bold">$99.00</p>
          </div>
        </div>
        <div className="shadow-md rounded-lg overflow-hidden">
          <Image
            src={img5}
            alt="Product 2"
            className="w-full h-64 object-cover"  // Set fixed height and cover the image
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2">Library Stool Chair</h3>
            <p className="text-teal-600 font-bold">$99.00</p>
          </div>
        </div>
        
        <div className="shadow-md rounded-lg overflow-hidden">
          <Image
            src={img1}
            alt="Product 3"
            className="w-full h-64 object-cover"  // Set fixed height and cover the image
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2">Library Stool Chair</h3>
            <p className="text-teal-600 font-bold">$99.00</p>
          </div>
        </div>
      </div>
    </div>


    {/* categories section */}
 <div className="container mx-auto p-2 bg-white mb-8 mt-28 ml-32">
  <h1 className="text-2xl font-bold text-gray-800 mb-3">Top Categories</h1>
  <div className=" max-w-[996px]  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {/* Category Card */}
    <div className="relative rounded-md overflow-hidden shadow-md">
      <Image
        src={chair}
        alt="Wing Chair"
        layout="responsive"
        width={200}
        height={150}
        className="object-cover w-full h-full"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-2">
        <h2 className="text-white text-sm font-medium">Wing Chair</h2>
        <p className="text-gray-300 text-xs">3,584 Products</p>
      </div>
    </div>
    {/* Category Card */}
    <div className="relative rounded-md overflow-hidden shadow-md">
      <Image
        src={chair2}
        alt="Wooden Chair"
        layout="responsive"
        width={200}
        height={150}
        className="object-cover w-full h-full"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-2">
        <h2 className="text-white text-sm font-medium">Wooden Chair</h2>
        <p className="text-gray-300 text-xs">157 Products</p>
      </div>
    </div>
    {/* Category Card */}
    <div className="relative rounded-md overflow-hidden shadow-md">
      <Image
        src={chair3}
        alt="Desk Chair"
        layout="responsive"
        width={200}
        height={150}
        className="object-cover w-full h-full"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-2">
        <h2 className="text-white text-sm font-medium">Desk Chair</h2>
        <p className="text-gray-300 text-xs">154 Products</p>
      </div>
    </div>
    
  </div>
  
</div>


{/* products section */}


<div className="font-sans  px-4 py-8 bg-white ">
      <div className="mx-auto lg:max-w-6xl md:max-w-4xl ml-28">
        <h2 className="text-4xl font-bold text-gray-800  mb-12 text-center">Our Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 ">
        {/* 1st row  */}
          <div className=" p-3 cursor-pointer shadow-sm  hover:scale-[1.03] transition-all">
            <div className="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <Image src={img7} alt="product1"
                className="h-full w-5/6 mx-auto block object-contain rounded-xl" />
            </div>
            <div className="text-center mt-4 ">
              <h3 className="text-sm font-bold text-gray-600">Liberty School Chair</h3>
              <h4 className="text-base text-black font-bold mt-2">$99.00</h4>
            </div>
          </div>

          <div className=" p-3 cursor-pointer shadow-sm  hover:scale-[1.03] transition-all">
            <div className="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <Image src={img5} alt="product1"
                className="h-full w-5/6 mx-auto block object-contain rounded-xl" />
            </div>
            <div className="text-center mt-4">
              <h3 className="text-sm font-bold text-gray-600">Liberty School Chair</h3>
              <h4 className="text-base text-black font-bold mt-2">$99.00</h4>
            </div>
          </div>


          <div className=" p-3 cursor-pointer shadow-sm  hover:scale-[1.03] transition-all">
            <div className="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <Image src={img2} alt="product1"
                className="h-full w-5/6 mx-auto block object-contain rounded-xl" />
            </div>
            <div className="text-center mt-4">
              <h3 className="text-sm font-bold text-gray-600">Liberty School Chair</h3>
              <h4 className="text-base text-black font-bold mt-2">$99.00</h4>
            </div>
          </div>

          <div className=" p-3 cursor-pointer shadow-sm  hover:scale-[1.03] transition-all">
            <div className="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <Image src={img8} alt="product1"
                className="h-full w-5/6 mx-auto block object-contain rounded-xl " />
            </div>
            <div className="text-center mt-4">
              <h3 className="text-sm font-bold text-gray-600">Liberty School Chair</h3>
              <h4 className="text-base text-black font-bold mt-2">$99.00</h4>
            </div>
          </div>

          <div className=" p-3 cursor-pointer shadow-sm  hover:scale-[1.03] transition-all">
            <div className="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <Image src={img2} alt="product1"
                className="h-full w-5/6 mx-auto block object-contain rounded-xl" />
            </div>
            <div className="text-center mt-4">
              <h3 className="text-sm font-bold text-gray-600">Liberty School Chair</h3>
              <h4 className="text-base text-black font-bold mt-2">$99.00</h4>
            </div>
          </div>


          <div className=" p-3 cursor-pointer shadow-sm  hover:scale-[1.03] transition-all">
            <div className="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <Image src={img1} alt="product1"
                className="h-full w-5/6 mx-auto block object-contain rounded-xl" />
            </div>
            <div className="text-center mt-4">
              <h3 className="text-sm font-bold text-gray-600">Liberty School Chair</h3>
              <h4 className="text-base text-black font-bold mt-2">$99.00</h4>
            </div>
          </div>

        </div>
      </div>
    </div>



    

  </div>
  

  )
}

export default Home
