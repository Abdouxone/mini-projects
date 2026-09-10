"use client";
import { useState } from "react";

export default function Cookie() {
  const [closed, setClosed] = useState(false);
  return (
    !closed && (
      <div className=" flex items-center justify-center">
        <div className="fixed font-nunito shadow-sm gap-3 bottom-4 p-4 rounded-2xl sm:max-w-5xl w-full max-w-md flex flex-col sm:flex-row justify-center sm:items-center bg-zinc-800">
          <img
            src="/cookies/images/cookie/img-1.png"
            alt="cookie"
            className="h-10 w-10"
          />
          <p className="text-sm font-normal text-white ">
            We use cookies to improve your browsing experience. By clicking, you
            agree to the of cookies{" "}
            <a href="#" className="text-blue-500">
              Privacy Policy
            </a>
          </p>
          <div className="flex gap-2">
            <button className="text-white rounded-l-full px-5 py-2 border hover:bg-zinc-600 transition-all duration-500 border-zinc-600">
              Accept
            </button>
            <button
              onClick={() => setClosed(true)}
              className="text-white rounded-r-full px-5 py-2 border hover:bg-zinc-600 transition-all duration-500 border-zinc-600"
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    )
  );
}
