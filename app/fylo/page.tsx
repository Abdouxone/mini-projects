import { SunIcon } from "lucide-react";

export default function page() {
  return (
    <div>
      <div className="dark:bg-[#1C2431]">
        {/* header */}
        <div className="flex flex-col md:space-y-0 space-y-7 md:flex-row md:justify-between items-center p-10">
          <img
            src="/fylo/images/logo-dark-mode.svg"
            alt=""
            className="md:w-fit w-44 "
          />
          <div className="flex md:space-x-10 md:text-lg space-x-3 font-nunito items-center">
            <a className="cursor-pointer hover:text-[#65E2B8] text-white ">
              Features
            </a>
            <a className="text-white cursor-pointer hover:text-[#65E2B8] ">
              Testimonials
            </a>
            <SunIcon className="text-white" size={20} />
          </div>
        </div>
        {/* hero */}
        <div className="flex flex-col max-w-3xl mx-auto p-5 space-y-10">
          <img src="/fylo/images/illustration-intro.png" alt="" />
          <div className="text-center font-nunito space-y-7 ">
            <h1 className="text-white md:text-4xl text-4xl font-semibold ">
              All your files in one secure location, assessible anywhere.
            </h1>
            <p className="mx-auto text-base md:text-lg max-w-xl">
              Fylo stores all your most important files in one secure location.
              Access them wherever you need, share and collaborate with friends
              family, and co-workers.
            </p>
            <button className="bg-[#65E2D9] hover:cursor-pointer hover:scale-95 text-white text-lg py-3 px-10 rounded-full">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
