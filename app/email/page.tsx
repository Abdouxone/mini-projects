import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="h-screen w-full bg-black/85 flex justify-center items-center">
      <div className="md:w-[440px] w-[300px] md:h-1/4 h-[65%] bg-black/50 rounded-2xl flex flex-col md:flex-row overflow-hidden">
        <img
          src="/image.jpg"
          className="md:h-full h-[60%] object-cover p-2 rounded-2xl hover:scale-105 transition-all"
          alt="image"
        />
        <div className="flex flex-col justify-center p-4">
          <h1 className="text-white font-serif">
            Get diet and fitness tips in your inbox
          </h1>
          <p className="text-white text-[10px] mt-3 text-center md:text-start ">
            Eat better and exercise better. Sign up for the Diet&Fitness
            newsletter
          </p>
          <div className="md:flex-row flex-col flex mt-3">
            <input
              type="text"
              className="border border-gray-100/30 rounded text-white/50 text-xs px-2 py-2"
              placeholder="Enter your email"
            />
            <button className="bg-green-500/80 md:ml-3 py-2 px-3 mt-2 md:mt-0 rounded-lg text-xs hover:bg-green-500/50 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
