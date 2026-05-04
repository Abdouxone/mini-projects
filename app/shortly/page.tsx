import { MenuIcon } from "lucide-react";

export default function page() {
  return (
    <div>
      {/* header */}
      <div className="max-w-7xl  font-poppins mx-auto">
        <div className="flex flex-row items-center p-5 justify-between">
          <div className="flex flex-row items-center space-x-17">
            <img src="/shortly/images/logo.svg" alt="logo" />
            <nav className="lg:flex hidden items-center space-x-1">
              <a className="p-4 font-bold text-zinc-500 text-lg" href="">
                Features
              </a>
              <a className="p-4 font-bold text-zinc-500 text-lg" href="">
                Pricing
              </a>
              <a className="p-4 font-bold text-zinc-500 text-lg" href="">
                Resources
              </a>
            </nav>
          </div>
          <div className="hidden md:flex items-center justify-center ">
            <div className="p-4 font-bold text-zinc-500 text-lg">Login</div>
            <div className="px-7 py-2 font-bold  text-white text-lg rounded-3xl bg-[#2BD0D0] ">
              Sign Up
            </div>
          </div>
          <div className="md:hidden cursor-pointer flex">
            <MenuIcon color="gray" size={30} />
          </div>
        </div>
      </div>
      {/* hero */}
      <div className="max-w-7xl font-poppins  mx-auto">
        <div className="flex  flex-col-reverse p-5 pt-2  justify-between   lg:flex-row">
          <div className="max-w-md pt-20  text-center lg:text-left">
            <h1 className="lg:text-6xl text-5xl  font-bold">
              More than just shorter links
            </h1>
            <p className="mt-9 text-2xl  font-normal">
              Build your brand's recognition and get detailed insights on how
              your links are performing.
            </p>
            <button className="px-9 cursor-pointer  py-4 text-2xl font-bold text-white mt-5 hover:bg-cyan-600 transition-all duration-300  bg-[#2BD0D0] rounded-full">
              Get Started
            </button>
          </div>
          <div className="p-1 mt-2">
            <img
              className="w-160"
              src="/shortly/images/illustration-working.svg"
              alt="logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
