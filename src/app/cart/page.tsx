import React from 'react'
import Image from 'next/image';
import frame2 from "@/app/public/Frame (2).png"
import frame from "@/app/public/Frame.png"
import { CiHeart } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";

const Cart = () => {
  return (
    <div className="font-sans">
    <div className="grid lg:grid-cols-3 px-28">
      <div className="lg:col-span-2 p-6 bg-white overflow-x-auto">
        <div className="flex gap-2 border-b pb-4 ">
          <h2 className="text-2xl font-bold text-gray-800 flex-1">Bag</h2>
          
        </div>

        <table className="mt-6 w-full border-collapse divide-y">
          

          <tbody className="whitespace-nowrap divide-y">
            <tr>
              <td className="p-4">
                <div className="flex items-center gap-4 w-max">
                  <div className="h-32 shrink-0">
                    <Image src={frame} alt = "image" className="w-full h-full object-contain rounded-lg" />
                  </div>
                  <div>
                    <p className="text-base font-thin text-gray-800">Library Stool Chair</p>
                    <p className="text-base font-thin text-gray-800">Ashen Slate/Cobalt Bliss</p>
                    <p className="text-base font-thin text-gray-800 mt-5">Size L      Quantity 1</p>
                    <div className="flex items-center space-x-2 mt-3">
                    <CiHeart />
                    <RiDeleteBin6Line />
                  </div>
                  </div>
                </div>
              </td>
              
              <td className="p-4">
                <h4 className="text-base font-bold text-gray-800 ">MRP: $99</h4>
              </td>
            </tr>

            <tr>
              <td className="p-4">
                <div className="flex items-center gap-4 w-max">
                  <div className="h-32 shrink-0">
                    <Image src={frame2} alt="image" className="w-full h-full object-contain rounded-lg" />
                  </div>
                  <div>
                    <p className="text-base font-thin text-gray-800">Library Stool Chair</p>
                    <p className="text-base font-thin text-gray-800">Ashen Slate/Cobalt Bliss</p>
                    <p className="text-base font-thin text-gray-800 mt-5">Size L      Quantity 1</p>
                    <div className="flex items-center space-x-2 mt-3">
                    <CiHeart />
                    <RiDeleteBin6Line />
                  </div>
                  </div>
                </div>
              </td>
              
              <td className="p-4">
                <h4 className="text-base font-bold text-gray-800 ">MRP: $99</h4>
              </td>
            </tr>

            
            

           
          </tbody>
        </table>
      </div>

      <div className="bg-whitep-6 h-auto lg:sticky lg:top-0 lg:h-screen">
        <h2 className="text-2xl font-bold text-gray-800 border-b pb-4">Summary</h2>

        <ul className="text-gray-800 divide-y mt-6">
          <li className="flex flex-wrap gap-4 text-base py-3">Subtotal <span className="ml-auto font-bold">$198.00</span></li>
          <li className="flex flex-wrap gap-4 text-base py-3">Estimated Delivery & Handling <span className="ml-auto font-bold">FREE</span></li>
          <li className="flex flex-wrap gap-4 text-base py-3">Total<span className="ml-auto font-bold">$198.00</span></li>
       
        </ul>

        <button type="button" className="mt-6 text-base px-5 py-2.5 w-full bg-teal-600 hover:bg-teal-700 text-white rounded-lg">Member Checkout</button>
      </div>
    </div>
  </div>
  )
}

export default Cart
