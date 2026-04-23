import { SearchIcon } from "lucide-react";
import React from "react";

const images = [
  { id: 1, url: "/image1.jpg" },
  { id: 2, url: "/image2.jpg" },
  { id: 3, url: "/image3.jpg" },
  { id: 4, url: "/image4.jpg" },
  { id: 5, url: "/image5.jpg" },
  { id: 6, url: "/image6.jpg" },
];

export default function page() {
  return (
    <div className="bg-cyan-200/30 min-h-screen flex justify-center items-center">
      {/* container */}
      <div className="flex flex-col shadow-2xl md:w-full md:m-5 mt-3 bg-white rounded-xl w-xs">
        {/* NavBar */}
        <div className="flex flex-col mt-10 mb-10 md:flex-row md:mr-30 md:space-y-0 md:justify-end md:gap-10 space-y-4 items-center ">
          {/* Vector */}
          <div className="group ">
            <h2 className="text-black hover:cursor-pointer mb-2">Vector</h2>
            <div className="group-hover:opacity-100  opacity-0 border-b-2 transition-all duration-300"></div>
          </div>
          {/* Illustrations */}
          <div className=" group">
            <h2 className="text-black hover:cursor-pointer mb-2 ">
              Illustrations
            </h2>
            <div className="group-hover:opacity-100 opacity-0 border-b-2   transition-all duration-300"></div>
          </div>
          {/* Images */}
          <div className="group">
            <h2 className="text-black hover:cursor-pointer  mb-2">Images</h2>
            <div className="group-hover:opacity-100 opacity-0 border-b-2 transition-all duration-300"></div>
          </div>
          {/* Icons */}
          <div className=" group">
            <h2 className="text-black hover:cursor-pointer mb-2">Icons</h2>
            <div className="group-hover:opacity-100 opacity-0 border-b-2 transition-all duration-300"></div>
          </div>
        </div>
        {/* Search and upload button */}
        <div className="flex flex-col items-center md:justify-between w-[80%] mx-auto justify-center md:flex-row space-y-4 md:space-y-0">
          {/* Search */}
          <div className="flex border-b-2 w-full justify-between md:w-xs border-gray-500/40 ">
            <input
              type="text"
              className="focus:outline-none border-none"
              placeholder="Search"
            />
            <SearchIcon className="opacity-50" />
          </div>
          {/* Button */}
          <div className="bg-black  hover:cursor-pointer md:w-xs w-full hover:bg-white hover:text-black border transition-all duration-300 text-white md:p-4 p-4 rounded-xl text-center font-semibold">
            Upload
          </div>
        </div>
        {/* Images */}
        <div className="grid  mb-10 md:grid-cols-3 w-[80%] mx-auto  mt-10 md:space-x-5  md:space-y-3 space-y-4">
          {images.map((image) => (
            <div className="group relative">
              <img
                key={image.id}
                className="rounded-lg "
                src={image.url}
                alt="pic"
              />
              <div className="absolute text-white bg-black rounded-b-lg p-2 w-full bottom-0  opacity-0 group-hover:opacity-60 transition-all duration-500">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-col">
                    <span className="font-serif">Abstract Painting</span>
                    <span className="text-xs">245 likes - 35 Shares</span>
                  </div>
                  <img className="w-6" src="/bookmark.svg" alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
