"use client";
import { XIcon } from "lucide-react";
import { useState } from "react";

export default function Cookie() {
  const [closed, setClosed] = useState(false);
  return (
    !closed && (
      <div className="flex justify-center">
        <div className="max-w-sm w-full font-nunito flex gap-4 items-center flex-col fixed bottom-4 bg-amber-50 shadow-sm border border-gray-100 rounded-xl p-4">
          <img
            src="/cookies/images/cookie/img-1.png"
            alt="cookie"
            className="w-12"
          />
          <p className="text-base text-zinc-600 text-center font-medium">
            We use third-party cookies in order to personalize your site
            experience.
          </p>
          <button className="bg-zinc-700 hover:bg-zinc-900 transition-all duration-500 cursor-pointer text-white px-5 py-2 rounded-xl">
            Accept
          </button>
          <XIcon
            onClick={() => setClosed(true)}
            className="top-3 absolute right-3 hover:rotate-45 transition-all duration-500 cursor-pointer"
            size={20}
          />
        </div>
      </div>
    )
  );
}
