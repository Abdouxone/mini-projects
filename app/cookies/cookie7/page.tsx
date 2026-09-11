"use client";
import { XIcon } from "lucide-react";
import { useState } from "react";

export default function Cookie() {
  const [closed, setClosed] = useState(false);
  return (
    !closed && (
      <div className="fixed font-nunito max-w-sm gap-4 rounded-xl flex flex-col bottom-4 left-4 p-4 bg-white border border-gray-100 shadow-xl">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <img
              src="/cookies/images/cookie/img-1.png"
              alt="cookie"
              className="w-10"
            />
            <h2 className="text-black text-2xl font-semibold">
              Cookie Consent
            </h2>
          </div>
          <XIcon
            onClick={() => setClosed(true)}
            size={25}
            className="bg-gray-100 w-10 h-10 p-2 hover:scale-105 hover:rotate-60 hover:bg-gray-200 cursor-pointer transition-all duration-300 rounded-full"
          />
        </div>
        <p className="text-sm text-zinc-500 font-normal">
          This website uses cookies or similar sto enhance your browsing
          experience and provide personalized recommendations.
        </p>
        <div className="flex items-center justify-between">
          <a href="#" className="text-blue-500">
            Privacy Policy
          </a>
          <button className="bg-blue-500 rounded-xl cursor-pointer hover:bg-blue-700 transition-all duration-500 text-white px-5 py-2">
            Accept
          </button>
        </div>
      </div>
    )
  );
}
