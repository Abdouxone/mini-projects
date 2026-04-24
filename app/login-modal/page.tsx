import { ArrowRight } from "lucide-react";
import React from "react";

export default function page() {
  return (
    <div className="min-h-screen bg-rose-50 flex items-center justify-center">
      <div className="flex relative flex-col bg-white md:flex-row rounded-lg shadow-xl w-sm md:w-fit  md:h-152">
        {/* absolute element */}
        <div className="absolute top-3 text-2xl text-white md:bg-white bg-black/50 rounded-full px-3 hover:scale-105 transition-all hover:cursor-pointer duration-300 md:text-black opacity-80  right-5">
          X
        </div>
        <div className="p-10 space-y-5 md:w-md">
          {/* log in */}
          <div className="space-y-4">
            <h1 className="font-serif text-3xl font-semibold">Log In</h1>
            <p className="text-zinc-900  font-extralight">
              Log in to you account to upload or download pictures, videos or
              music.
            </p>
          </div>
          {/* email input field */}
          <div>
            <input
              type="text"
              placeholder="Enter you Ermail address"
              className="border w-full p-5  rounded-lg border-zinc-300 placeholder:text-zinc-500/50"
            />
          </div>

          {/* password and and next icon */}
          <div className="flex flex-col md:justify-between md:items-center md:flex-row space-y-5">
            <a href="" className="text-center text-cyan-600 ">
              Forgot Password
            </a>
            <div className=" text-white text-center hover:shadow-xl duration-300  hover:-translate-y-1 transition-all flex flex-row items-center justify-center gap-5  bg-cyan-600 p-5 rounded-xl">
              <span className="text-lg font-semibold">Next</span>
              <ArrowRight color="white" />
            </div>
          </div>

          {/* line */}
          <div className="border-t border-zinc-300 mt-10"></div>

          <p className="text-center text-sm mt-3 text-zinc-400">
            or Log in with
          </p>

          {/* facebool, gooogle */}
          <div className="flex flex-col md:justify-between md:flex-row gap-5">
            {/* Facebook */}
            <div className="flex-row flex justify-center border px-5 py-3 rounded-2xl border-zinc-300 hover:-translate-y-1 transition-all duration-300 hover:shadow-xl items-center gap-4">
              <img src="/facebook.png" className="w-10" alt="" />
              <span className="text-zinc-700">Facebook</span>
            </div>
            {/* Google */}
            <div className="flex-row flex justify-center border px-5 py-3 rounded-2xl border-zinc-300 hover:-translate-y-1 transition-all duration-300 hover:shadow-xl items-center gap-4">
              <img src="/google.png" className="w-10" alt="" />
              <span className="text-zinc-700">Google</span>
            </div>
          </div>
        </div>
        <div className="hidden  md:flex">
          <img src="/bg.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}
