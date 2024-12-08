import Image from 'next/image';
import { CiShoppingCart } from "react-icons/ci";
import img5 from "@/app/public/img5.png"
import img6 from "@/app/public/img6.png"
import img7 from "@/app/public/img7.jpg"
import img8 from "@/app/public/img8.jpg"
import img9 from "@/app/public/img9.png"
import img10 from "@/app/public/img10.png"

const ProductPage = () => {
    
   
  return (
    <div className="bg-white min-h-screen  md:px-8 lg:px-16 mx-28 mb-8">
      {/* Product Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-10">
        <div>
          <Image
            src={img5} 
            alt="Library Stool Chair"
            width={500}
            height={500}
            className="rounded-lg shadow-md"
          />
        </div>

        <div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">Library Stool Chair</h1>
          <p className="text-white text-xl font-semibold mb-4 pl-4 bg-teal-500 rounded-full w-36" >$20.00 USD</p>
          <p className="text-gray-700 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing.
          </p>
          <button className="flex items-center gap-2 bg-teal-500 text-white py-2 px-6 rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400">
            <span className="material-icons text-xl"><CiShoppingCart /></span>
            Add To Cart
          </button>
        </div>
      </div>

      {/* Featured Products Section */}
    <div className="font-sans  px-4 py-8">
      <div className="mx-auto lg:max-w-6xl md:max-w-4xl">
        <h2 className="text-4xl font-bold text-gray-800 text-left mb-12">Featured Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 ">

          <div className=" p-3 cursor-pointer shadow-sm  hover:scale-[1.03] transition-all">
            <div className="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <Image src={img6} alt="product1"
                className="h-full w-5/6 mx-auto block object-contain" />
            </div>
            <div className="text-center mt-4">
              <h3 className="text-sm font-bold text-gray-600">Liberty School Chair</h3>
              <h4 className="text-base text-black font-bold mt-2">$99.00</h4>
            </div>
          </div>

          <div className=" p-3 cursor-pointer shadow-sm  hover:scale-[1.03] transition-all">
            <div className="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <Image src={img7} alt="product1"
                className="h-full w-5/6 mx-auto block object-contain" />
            </div>
            <div className="text-center mt-4">
              <h3 className="text-sm font-bold text-gray-600">Liberty School Chair</h3>
              <h4 className="text-base text-black font-bold mt-2">$99.00</h4>
            </div>
          </div>
          
          <div className=" p-3 cursor-pointer shadow-sm  hover:scale-[1.03] transition-all">
            <div className="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <Image src={img9} alt="product1"
                className="h-full w-5/6 mx-auto block object-contain" />
            </div>
            <div className="text-center mt-4">
              <h3 className="text-sm font-bold text-gray-600">Liberty School Chair</h3>
              <h4 className="text-base text-black font-bold mt-2">$99.00</h4>
            </div>
          </div>
          <div className=" p-3 cursor-pointer shadow-sm  hover:scale-[1.03] transition-all">
            <div className="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <Image src={img8} alt="product1"
                className="h-full w-5/6 mx-auto block object-contain" />
            </div>
            <div className="text-center mt-4">
              <h3 className="text-sm font-bold text-gray-600">Liberty School Chair</h3>
              <h4 className="text-base text-black font-bold mt-2">$99.00</h4>
            </div>
          </div>

          <div className=" p-3 cursor-pointer shadow-sm  hover:scale-[1.03] transition-all">
            <div className="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <Image src={img9} alt="product1"
                className="h-full w-5/6 mx-auto block object-contain" />
            </div>
            <div className="text-center mt-4">
              <h3 className="text-sm font-bold text-gray-600">Liberty School Chair</h3>
              <h4 className="text-base text-black font-bold mt-2">$99.00</h4>
            </div>
          </div>

          <div className=" p-3 cursor-pointer shadow-sm  hover:scale-[1.03] transition-all">
            <div className="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <Image src={img10} alt="product1"
                className="h-full w-5/6 mx-auto block object-contain" />
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
   
  );
};

export default ProductPage;
