"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";

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
      <div
        className={`bg-[url('/countdown/van.jpg')]   absolute inset-0 min-h-screen  bg-center bg-cover bg-no-repeat`}
      ></div>
      <div
        className={`max-w-2xl ${styles.container} px-5 md:px-0 mx-auto relative z-5 space-y-10 mt-10 md:mt-20 flex flex-col items-center justify-center`}
      >
        <div className="md:text-4xl font-bold text-3xl md:gap-2  flex flex-col md:flex-row text-center font-rubik text-white">
          <span>We Are</span>
          <span>Coming Soon...</span>
        </div>
        <p className="text-center font-rubik font-normal md:text-xl text-sm max-w-2xl text-zinc-200">
          You can't lift the stone without being ready for the snake that's
          revealed.
        </p>

        <div className="grid font-poppins   text-white md:grid-cols-4 gap-5 grid-cols-2 mt-5">
          <div className="p-7 w-25 h-25 flex-col flex items-center justify-center backdrop-blur-xs  backdrop-saturate-150 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.37)] rounded-full">
            <h1 className="text-2xl">{days}</h1>
            <span>days</span>
          </div>
          <div className="p-7 w-25 h-25 flex-col flex items-center justify-center backdrop-blur-xs backdrop-saturate-150 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.37)] rounded-full">
            <h1 className="text-2xl">{hours}</h1>
            <span>hours</span>
          </div>
          <div className="p-7 w-25 h-25 flex-col flex items-center justify-center  backdrop-blur-xs backdrop-saturate-150 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.37)] rounded-full">
            <h1 className="text-2xl">{minutes}</h1>
            <span>minutes</span>
          </div>
          <div className="p-7 w-25 h-25 flex-col flex items-center justify-center backdrop-blur-xs backdrop-saturate-150 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.37)] rounded-full">
            <h1 className="text-2xl">{seconds}</h1>
            <span>seconds</span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}
