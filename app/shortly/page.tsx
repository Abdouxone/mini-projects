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
            <div className="p-4 font-bold cursor-pointer text-zinc-500 text-lg">
              Login
            </div>
            <button className="px-7 cursor-pointer py-2 font-bold  text-white text-lg rounded-3xl bg-[#2BD0D0] ">
              Sign Up
            </button>
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

            <button className="px-12 py-3 w-full md:w-fit cursor-pointer  text-white   bg-[#2BD0D0] rounded-lg whitespace-nowrap">
              Shorten it!
            </button>
          </div>
          <div className="flex flex-col  md:flex-row md:justify-between rounded-lg p-8 justify-center items-center bg-white">
            <p className="text-black text-lg">https://frontendmentor.io</p>
            <div className="flex flex-col md:flex-row justify-center items-center md:space-y-0 space-y-3 md:space-x-4">
              <p className="text-[#2BD0D0] text-lg">https://rel.ink/k4IKyk</p>
              <button className="bg-[#2BD0D0] cursor-pointer text-white px-8 py-2 rounded-lg">
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
              <button className="bg-[#2BD0D0] cursor-pointer text-white px-8 py-2 rounded-lg">
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
              <button className="bg-[#2BD0D0] cursor-pointer text-white px-8 py-2 rounded-lg">
                Copy
              </button>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mt-20 pb-25">
          <div className="flex flex-col text-center mb-20">
            <h1 className="text-4xl font-bold ">Advanced Statistics</h1>
            <p className="mt-5 text-base font-normal md:max-w-md max-w-xs mx-auto">
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </p>
          </div>

          {/* cards */}
          <div className="flex  items-center relative space-y-15 md:space-y-0 p-6 md:p-0 justify-center flex-col md:flex-row lg:max-w-6xl mx-auto  md:space-x-10 ">
            <div className=" md:block md:w-1/2 w-2 h-1/2 absolute md:h-3 bg-[#2BD0D0]"></div>
            <div className="flex flex-col relative items-center md:items-start  bg-white rounded-lg p-5">
              <div className="absolute bg-black p-5 -top-10 rounded-full">
                <img
                  className=" "
                  src="/shortly/images/icon-brand-recognition.svg"
                  alt=""
                />
              </div>

              <div className="mt-9 text-center md:text-left">
                <h1 className="text-xl font-bold">Brand Recognition</h1>
                <p className="font-normal mt-4 text-base ">
                  Boost your brand recognition with each click. Generic links
                  don't mean a thing. Branded links help instil confidence in
                  your content.
                </p>
              </div>
            </div>
            <div className="flex flex-col relative items-center md:items-start  md:mt-15 bg-white rounded-lg p-5">
              <div className="absolute bg-black p-5 -top-10 rounded-full">
                <img
                  className=" "
                  src="/shortly/images/icon-detailed-records.svg"
                  alt=""
                />
              </div>

              <div className="mt-9 text-center md:text-left">
                <h1 className="text-xl font-bold">Brand Recognition</h1>
                <p className="font-normal mt-4 text-base ">
                  Gain insights into who is clicking your links. Knowing when
                  and where people engage with your content helps inform better
                  decisions.
                </p>
              </div>
            </div>
            <div className="flex flex-col relative items-center md:items-start  md:mt-25 bg-white rounded-lg p-5">
              <div className="absolute bg-black p-5 -top-10 rounded-full">
                <img
                  className=" "
                  src="/shortly/images/icon-fully-customizable.svg"
                  alt=""
                />
              </div>

              <div className="mt-9 text-center md:text-left">
                <h1 className="text-xl font-bold">Brand Recognition</h1>
                <p className="font-normal mt-4 text-base ">
                  Improve brand awareness and content discoverability through
                  customizable links, supercharging audience engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  boost section */}
      <section className="w-full bg-[#3B3054] bg-[url('/shortly/images/bg-boost-mobile.svg')] md:bg-[url('/shortly/images/bg-boost-desktop.svg')] bg-cover bg-no-bg-repeat relative ">
        <div className="flex flex-col font-poppins pt-20 pb-20 justify-between space-y-5 items-center">
          <h1 className="text-white text-4xl font-bold ">
            Boost your links today
          </h1>
          <button className="bg-[#2BD0D0] p-4 text-2xl md:px-5 font-bold text-white md:py-2 rounded-full">
            Get Started
          </button>
        </div>
      </section>

      {/* footer */}
      <footer className="bg-[#232127] w-full">
        <div></div>
      </footer>
    </div>
  );
}
