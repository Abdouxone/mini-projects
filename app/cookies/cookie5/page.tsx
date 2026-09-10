"use client";
import { Divide, XIcon } from "lucide-react";
import { useState } from "react";

export default function Cookie() {
  const [closed, setClosed] = useState(false);
  return (
    !closed && (
      <div className="items-center flex-1 bg-linear-to-r from-purple-200 via-red-100 to-cyan-100 justify-center flex">
        <div className="max-w-sm w-full items-center py-3 px-5 fixed  bottom-4 justify-between bg-white shadow-xl rounded-full flex">
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
          <XIcon
            onClick={() => setClosed(true)}
            className="bg-gray-100 rounded-full cursor-pointer"
            size={30}
          />
        </div>
      </div>
    )
  );
}
