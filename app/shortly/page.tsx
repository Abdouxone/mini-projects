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
      <div className="max-w-7xl mb-45 font-poppins  mx-auto">
        <div className="flex  flex-col-reverse p-5 pt-2 items-center  justify-between   lg:flex-row">
          <div className="lg:max-w-md max-w-xl pt-20  text-center lg:text-left">
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

      {/* links section */}
      <section className=" bg-gray-200 font-poppins ">
        <div className="max-w-4xl p-5  mx-auto space-y-5">
          <div className="bg-gray-800 -mt-19 justify-center md:space-x-10 md:space-y-0 space-y-5 items-center flex flex-col p-9 rounded-lg md:flex-row">
            <input
              type="text"
              className=" border-none outline-none w-full p-3 text-black rounded-lg placeholder:text-orange-400 bg-white "
              placeholder="Shorten a link here..."
            />

            <button className="px-12 py-3 w-full md:w-fit  text-white   bg-[#2BD0D0] rounded-lg whitespace-nowrap">
              Shorten it!
            </button>
          </div>
          <div className="flex flex-col  md:flex-row md:justify-between rounded-lg p-8 justify-center items-center bg-white">
            <p className="text-black text-lg">https://frontendmentor.io</p>
            <div className="flex flex-col md:flex-row justify-center items-center md:space-y-0 space-y-3 md:space-x-4">
              <p className="text-[#2BD0D0] text-lg">https://rel.ink/k4IKyk</p>
              <button className="bg-[#2BD0D0] text-white px-8 py-2 rounded-lg">
                Copy
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between rounded-lg p-8 justify-center items-center bg-white">
            <p className="text-black text-lg">
              https://twitter.com/frontendmentor
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center md:space-y-0 space-y-3 md:space-x-4">
              <p className="text-[#2BD0D0] text-lg">https://rel.ink/gxOXp9</p>
              <button className="bg-[#2BD0D0] text-white px-8 py-2 rounded-lg">
                Copy
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between rounded-lg p-8 justify-center items-center bg-white">
            <p className="text-black text-lg ">
              https://linkedin.com/frontend-mentor
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center md:space-y-0 space-y-3 md:space-x-4">
              <p className="text-[#2BD0D0] text-lg">https://rel.ink/gob3X9</p>
              <button className="bg-[#2BD0D0] text-white px-8 py-2 rounded-lg">
                Copy
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
