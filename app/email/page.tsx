import Image from "next/image";
import React from "react";

export default function page() {
  return (
    // Background container
    <div className="h-screen w-full bg-zinc-700 flex justify-center items-center">
      {/* card */}
      <div className="md:w-[440px] w-[300px] md:h-1/4 h-[70%] bg-zinc-800 rounded-2xl flex flex-col md:flex-row overflow-hidden">
        {/* image */}
        <img
          src="/image.jpg"
          className="md:h-full h-[60%] object-cover p-2 rounded-2xl hover:scale-102 transition-all"
          alt="image"
        />
        {/* Content */}
        <div className="flex flex-col justify-center p-4">
          <h1 className="text-white font-serif">
            Get diet and fitness tips in your inbox
          </h1>
          <p className="text-white text-[11px] tracking-wide leading-5 max-w-xs mt-3 text-center md:text-start ">
            Eat better and exercise better. Sign up for the Diet&Fitness
            newsletter
          </p>
          <div className="md:flex-row flex-col flex mt-3">
            <input
              type="text"
              className="border border-gray-100/30 rounded text-white/50 text-xs px-2 py-2"
              placeholder="Enter your email address"
            />
            <button className="bg-green-500/80 text-zinc-800 md:ml-3 py-2 px-3 mt-2 md:mt-0 rounded-lg text-xs hover:bg-green-500/50 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
