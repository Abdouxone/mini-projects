"use client";

import { useEffect, useState } from "react";

export default function page() {
  const targetDate = new Date("2026-08-20T00:00:00").getTime();

  const countDown = () => {
    const now = Date.now();
    const diff = targetDate - now;

    const days = Math.floor(diff / (24 * 60 * 60 * 1000));
    const hours = Math.floor((diff / (60 * 60 * 1000)) % 24);
    const minutes = Math.floor((diff / (60 * 1000)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    if (diff <= 0) return [0, 0, 0, 0];
    return [days, hours, minutes, seconds];
  };

  const [time, setTime] = useState(countDown());

  const [days, hours, minutes, seconds] = time;

  useEffect(() => {
    setInterval(() => {
      setTime(countDown());
    }, 1000);
  }, []);

  return (
    <div className="relative">
      <div className="bg-[url('/countdown/van.jpg')]   absolute inset-0 min-h-screen  bg-center bg-cover bg-no-repeat"></div>
      <div className="max-w-2xl mx-auto relative z-5 space-y-10 mt-20 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-rubik text-white">
          We Are Coming Soon...
        </h1>
        <p className="text-center text-zinc-200">
          Start working with Techwind that can provide everything you need to
          generate awareness, drive traffic, connect.
        </p>

        <div className="grid font-poppins   text-white md:grid-cols-4 gap-5 grid-cols-2 mt-5">
          <div className="p-7 w-25 h-25 flex-col flex items-center justify-center backdrop-blur-2xl backdrop-saturate-150 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.37)] rounded-full">
            <h1 className="text-2xl">{days}</h1>
            <span>days</span>
          </div>
          <div className="p-7 w-25 h-25 flex-col flex items-center justify-center backdrop-blur-2xl backdrop-saturate-150 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.37)] rounded-full">
            <h1 className="text-2xl">{hours}</h1>
            <span>hours</span>
          </div>
          <div className="p-7 w-25 h-25 flex-col flex items-center justify-center  backdrop-blur-2xl backdrop-saturate-150 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.37)] rounded-full">
            <h1 className="text-2xl">{minutes}</h1>
            <span>minutes</span>
          </div>
          <div className="p-7 w-25 h-25 flex-col flex items-center justify-center backdrop-blur-2xl backdrop-saturate-150 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.37)] rounded-full">
            <h1 className="text-2xl">{seconds}</h1>
            <span>seconds</span>
          </div>
        </div>

        <div className="flex-row flex gap-5">
          <div>
            <img src="/clipboard/images/icon-facebook.svg" alt="" />
          </div>
          <div>
            <img src="/clipboard/images/icon-facebook.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
