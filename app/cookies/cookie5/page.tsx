"use client";
import { Divide, XIcon } from "lucide-react";
import { useState } from "react";

export default function Cookie() {
  const [closed, setClosed] = useState(false);
  return (
    <div className="items-center h-screen bg-linear-to-r from-purple-200 via-red-100 to-cyan-100 justify-center flex">
      {!closed && (
        <div className="max-w-sm w-full items-center p-3 fixed  bottom-4 justify-between bg-white shadow-sm border border-gray-100 rounded-full flex">
          <div className="flex items-center gap-3">
            <img
              src="/cookies/images/cookie/img-1.png"
              alt="cookie"
              className="w-10"
            />
            <p className="font-nunito text-zinc-500 text-base">
              The website uses cookies.
            </p>
          </div>
          <button className=" bg-gray-100  rounded-full  cursor-pointer transition-all p-1">
            <XIcon
              onClick={() => setClosed(true)}
              size={30}
              className="hover:scale-110  duration-500 overflow-hidden hover:rotate-45"
            />
          </button>
        </div>
      )}
    </div>
  );
}
