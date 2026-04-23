import React from "react";

export default function page() {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white shadow-2xl transition-all md:mb-0 mb-5 rounded-2xl p-6 m-3 md:m-0 md:p-16  flex flex-col md:flex-row  items-center">
        {/* image card */}
        <div className="md:p-7 p-0 ">
          <img
            src="/headphone.png"
            alt=""
            className="mx-auto  hover:scale-105 w-60 transition-all"
          />
        </div>
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col md:text-left text-center">
            {/* text card */}
            <div>
              <h3 className="bg-black inline-block px-3 py-1  text-white  rounded-2xl mt-10  font-sans">
                Free Shipping
              </h3>
            </div>
            {/* Product Name */}
            <h1 className="text-2xl max-w-sm mt-5 font-medium">
              Razer Kraken Kitty Edt Gaming Headset Quartz
            </h1>
            <div className="flex-col flex text-center md:text-left">
              {/* Price */}
              <h3 className="mt-3 line-through">$799</h3>
              <h1 className="text-5xl mt-3 font-bold">$599</h1>
              <p className="text-sm text-gray-500/70 mt-3 font-light">
                This offer is valid until April 3rd or as long as stock lasts!
              </p>
              {/* Buttons */}
              <div className="group bg-blue-700 mt-3 pb-2 rounded-xl ">
                <button className="text-white group-hover:cursor-pointer bg-blue-500 w-full p-3 rounded-xl group-hover:translate-y-2 transition-all group-hover:bg-blue-700">
                  Add to cart
                </button>
              </div>
              {/* stock */}
              <div className="flex flex-row mt-3 group items-center space-x-3 cursor-default">
                <div className="w-3 h-3 bg-green-500 rounded-full group-hover:animate-ping"></div>
                <p className="text-sm">50+ pcs left in stock</p>
              </div>
              {/* Buttons */}
              <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-3 md:flex-row mt-3">
                <div className="flex items-center space-x-3 p-2 justify-center hover:shadow-xl hover:-translate-y-1 transition-all border-gray-500/50 rounded-xl border flex-row w-full">
                  <img src="/weight.png" className="w-10" alt="" />
                  <h2>Add to cart</h2>
                </div>
                <div className="flex items-center space-x-3 py-2 justify-center hover:shadow-xl hover:-translate-y-1 transition-all border-gray-500/50 rounded-xl border flex-row w-full">
                  <img src="/heart.png" className="w-10" alt="" />
                  <h2>Add to cart</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
