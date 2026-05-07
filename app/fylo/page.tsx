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
      </div>
    </div>
  );
}
