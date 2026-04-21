import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="h-screen w-full bg-black/85 flex justify-center items-center">
      <div className="w-[440px] h-1/4 bg-black/50 rounded-2xl flex">
        <img src="/image.jpg" className="h-full p-2 rounded-xl" alt="image" />
        <div className="flex flex-col justify-center p-4">
          <h1 className="text-white font-serif">
            Get diet and fitness tips in your inbox
          </h1>
          <p className="text-white text-[10px] mt-3 ">
            Eat better and exercise better. Sign up for the Diet&Fitness
            newsletter
          </p>
          <div className="flex mt-3">
            <input
              type="text"
              className="border border-gray-100/30 rounded text-white/50 text-xs px-2 py-2"
              placeholder="Enter your email"
            />
            <button className="bg-green-500/80 ml-3 rounded-lg text-xs px-3 hover:bg-green-500/50 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
