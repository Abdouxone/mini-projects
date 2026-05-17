"use client";
import { useState } from "react";
import styles from "./page.module.css";
import { X } from "lucide-react";

const features = [
  {
    title: "Bookmark in one click",
    description:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    img: "/bookmark/images/illustration-features-tab-1.svg",
  },
  {
    title: "Intelligent search",
    description:
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    img: "/bookmark/images/illustration-features-tab-2.svg",
  },
  {
    title: "Share your bookmarks",
    description:
      "Easily share your bookmarks and collections with others. Create a shareable a link that you can send at the click of a button.",
    img: "/bookmark/images/illustration-features-tab-3.svg",
  },
];

export default function page() {
  const [open, setOpen] = useState(false);
  const [feature, setFeature] = useState(features[0]);
  return (
    <div className=" ">
      {/* header */}
      <div
        className={`${styles.container} mx-auto relative flex font-rubik flex-row justify-between px-5 py-10 items-center `}
      >
        <img src="/bookmark/images/logo-bookmark.svg" className="z-22" alt="" />
        <nav className="space-x-10 items-center hidden md:flex uppercase text-lg text-[#9CA3AF]">
          <a href="" className="hover:text-[#FA5757]">
            Features
          </a>
          <a href="" className="hover:text-[#FA5757]">
            Download
          </a>
          <a href="" className="hover:text-[#FA5757]">
            FAQ
          </a>
          <button className="bg-[#FA5757] border-2 border-[#FA5757] hover:bg-white hover:text-[#FA5757] py-2 px-8 rounded-lg text-white ">
            Login
          </button>
        </nav>
        {/* mobile menu */}
        <div
          className="flex md:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <button>
            <img
              className="w-5 cursor-pointer"
              src="/bookmark/images/icon-hamburger.svg"
              alt=""
            />
          </button>
        </div>
        {open && (
          <div>
            <div className="font-serif  w-full text-white h-full fixed  z-20 bg-[#3A4058]/95 inset-0 flex flex-col md:hidden divide-y items-center pt-24 tracking-widest divide-gray-500  space-y-5">
              <div
                className="right-8 top-10 cursor-pointer absolute"
                onClick={() => {
                  setOpen(!open);
                }}
              >
                <X size={30} />
              </div>
              <h1 className="uppercase cursor-pointer text-lg max-w-xl w-full text-center  pb-2  ">
                features
              </h1>
              <h1 className="uppercase cursor-pointer text-lg max-w-xl w-full text-center  pb-2">
                download
              </h1>
              <h1 className="uppercase cursor-pointer text-lg max-w-xl w-full text-center  pb-2">
                FAQ
              </h1>
              <button className="uppercase cursor-pointer text-lg">
                login
              </button>
            </div>
          </div>
        )}
      </div>

      {/* hero */}
      <div className="overflow-x-hidden relative">
        <div
          className={`${styles.container}    mx-auto  px-5  flex-col-reverse flex lg:flex-row `}
        >
          <div className="flex flex-col min-[1020px]:mt-20 min-[1020px]:mb-20 text-center min-[1020px]:text-left  space-y-8 min-[1440px]:max-w-xl">
            <h1 className="font-rubik min-[1020px]:text-6xl  text-3xl font-semibold">
              A Simple Bookmark Manager
            </h1>
            <p className="font-normal text-lg min-[1020px]:text-2xl mx-auto min-[1020px]:mx-0 max-w-md font-rubik">
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>
            <div className="flex flex-row items-center justify-center min-[1020px]:justify-start font-rubik font-medium space-x-5">
              <button className="bg-[#5468D7] min-[1220px]:p-4 p-3 text-white min-[1220px]:text-lg text-sm rounded-lg">
                Get It On Chrome
              </button>
              <button className="bg-[#D1D5DB] min-[1220px]:p-4 p-3 text-black min-[1220px]:text-lg text-sm rounded-lg">
                Get It On Firefox
              </button>
            </div>
          </div>
          <div className="flex relative ">
            <div className="bg-[#5368DF]  hidden min-[1020px]:block h-[300px] right-0 absolute top-60 rounded-l-full min-[1020px]:translate-x-120 min-[1440px]:translate-x-100 w-[800px] "></div>
            <img
              src="/bookmark/images/illustration-hero.svg"
              alt=""
              className="relative z-10 min-[1440px]:mb-20 object-contain h-auto w-auto min-[1020px]:top-0 min-[1440px]:top-0 min-[1440px]:ml-25 "
            />
          </div>
        </div>
      </div>
      {/* Featuresd */}
      <div
        className={`${styles.container} mx-auto px-8 min-[1020px]:px-0  mt-20 flex space-y-5 flex-col`}
      >
        <div className="flex font-rubik flex-col max-w-md mx-auto text-center space-y-5">
          <h1 className="text-4xl font-semibold">Features</h1>
          <p className="font-normal text-base">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>
        <div className="flex   mx-auto text-zinc-700 mt-10 font-rubik text-lg flex-col md:flex-row md:space-x-10 text-center min-[1020px]:text-start md:space-y-0 space-y-10">
          <h1
            className="cursor-pointer border-b-3 pb-2 focus:border-b-2 border-[#FA5757] hover:text-[#FA5757]"
            onClick={() => setFeature(features[0])}
          >
            Simple Bookmarking
          </h1>
          <h1
            className="cursor-pointer border-b-3 pb-2 border-[#FA5757] hover:text-[#FA5757]"
            onClick={() => setFeature(features[1])}
          >
            Speedy Searching
          </h1>
          <h1
            className="cursor-pointer  border-b-3 pb-2 border-[#FA5757] hover:text-[#FA5757]"
            onClick={() => setFeature(features[2])}
          >
            Easy Sharing
          </h1>
        </div>
        <div className="flex flex-col w-full space-y-10 min-[1020px]:space-y-0 md:flex-row items-center md:items-start mt-10 gap-10 ">
          <div className="relative md:w-1/2">
            <div className="bg-[#5368DF] h-[300px] hidden min-[1020px]:block w-[800px] absolute top-35 md:-left-90 min-[1020px]:-left-60 rounded-r-full"></div>
            <img
              src={feature.img}
              alt=""
              className="w-auto h-auto object-contain md:left-3 min-[1020px]:left-30 relative z-10 "
            />
          </div>
          <div className="flex  top-0 md:w-1/2 text-center md:text-left relative flex-col md:items-start  items-center font-rubik  max-w-md space-y-8">
            <h1 className="text-3xl font-semibold">{feature.title}</h1>
            <p className="text-base font-normal">{feature.description}</p>
            <button className=" text-base font-medium rounded-lg bg-[#5468DF] text-white py-3 px-8">
              More Info
            </button>
          </div>
        </div>
      </div>

      {/* extension */}
      <div className="mt-50 flex flex-col  space-y-10 items-center justify-center">
        <div className="flex flex-col text-center max-w-md md:max-w-lg space-y-4 font-rubik">
          <h1 className="text-black text-3xl md:text-4xl font-medium ">
            Download the extension
          </h1>
          <p className="text-base font-normal">
            We've got more browsers in the pipeline. Please do let us know if
            you've got a favourite you'd like us to prioritize.
          </p>
        </div>
        <div className="flex flex-col pb-10 space-y-10 md:space-y-0 gap-5 overflow-x-hidden  w-full md:items-center md:justify-center px-10 md:flex-row">
          <div className="flex flex-col font-rubik shadow-xl rounded-lg gap-5 items-center">
            <img
              src="/bookmark/images/logo-chrome.svg"
              className="w-auto h-auto mt-5"
              alt="chrome logo"
            />
            <h1 className="text-xl font-bold ">Add to Chrome</h1>
            <p className="text-base font-normal">Minimum version 62</p>
            <img
              src="/bookmark/images/bg-dots.svg"
              alt="dots"
              className="w-full"
            />
            <div className="w-full px-8">
              <button className="bg-[#5468DF] cursor-pointer hover:bg-white hover:text-[#5468DF] border-2 transition-all duration-250 border-[#5468DF] w-full whitespace-nowrap text-white p-3 mb-4 rounded-lg">
                Add & Install Extension
              </button>
            </div>
          </div>
          <div className="flex flex-col font-rubik shadow-xl md:mt-7 rounded-lg gap-5 items-center">
            <img
              src="/bookmark/images/logo-firefox.svg"
              className="w-auto h-auto mt-5"
              alt="chrome logo"
            />
            <h1 className="text-xl font-bold ">Add to Firefox</h1>
            <p className="text-base font-normal">Minimum version 55</p>
            <img
              src="/bookmark/images/bg-dots.svg"
              alt="dots"
              className="w-full"
            />
            <div className="w-full px-8">
              <button className="bg-[#5468DF] cursor-pointer hover:bg-white hover:text-[#5468DF] border-2 transition-all duration-250 border-[#5468DF] whitespace-nowrap w-full text-white p-3 mb-4 rounded-lg">
                Add & Install Extension
              </button>
            </div>
          </div>
          <div className="flex flex-col  font-rubik shadow-xl md:mt-14 rounded-lg gap-5 items-center">
            <img
              src="/bookmark/images/logo-opera.svg"
              className="w-auto h-auto mt-5"
              alt="chrome logo"
            />
            <h1 className="text-xl font-bold ">Add to Opera</h1>
            <p className="text-base font-normal">Minimum version 46</p>
            <img
              src="/bookmark/images/bg-dots.svg"
              alt="dots"
              className="w-full"
            />
            <div className="w-full px-8">
              <button className="bg-[#5468DF] cursor-pointer hover:bg-white hover:text-[#5468DF] border-2 transition-all duration-250 border-[#5468DF] whitespace-nowrap w-full text-white p-3 mb-4 rounded-lg">
                Add & Install Extension
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* FAQ HEADING */}
      <section
        className={`${styles.container} font-rubik mx-auto mt-30 flex flex-col justify-center items-center space-y-5  text-center`}
      >
        <h1 className="md:text-4xl text-3xl font-semibold text-center">
          Frequently Asked Questions
        </h1>
        <p className="max-w-md text-center text-base font-normal text-zinc-800">
          Here are some of our FAQs. If you have any other questions you'd like
          answered please feel free to email us.
        </p>
      </section>
      {/* FAQ ACCORDION */}
      <div
        className={`${styles.container} px-5 mx-auto mb-30 flex flex-col mt-10`}
      >
        <div className=" max-w-2xl mx-auto">
          <div className="group border-b border-zinc-400 py-1" tabIndex={0}>
            <div className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease">
              <div className="transition duration-500 ease-in group-hover:text-red-500">
                What is Bookmark?
              </div>

              <div className="transition duration-500 ease-in group-focus:-rotate-180 group-focus:text-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    d="M1 1l8 8 8-8"
                  />
                </svg>
              </div>
            </div>
            <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease-in">
              <p className="py-2 text-justify text-base font-normal text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                repellat amet doloribus consequuntur eos similique provident
                tempora voluptates iure quia fuga dicta voluptatibus culpa
                mollitia recusandae delectus id suscipit labore?
              </p>
            </div>
          </div>
          <div className="group border-b border-zinc-400  py-1" tabIndex={1}>
            <div className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease">
              <div className="transition duration-500 ease-in group-hover:text-red-500">
                How can I request a new browser?
              </div>

              <div className="transition duration-500 ease-in group-focus:-rotate-180 group-focus:text-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    d="M1 1l8 8 8-8"
                  />
                </svg>
              </div>
            </div>
            <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease-in">
              <p className="py-2 text-justify text-base font-normal text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                repellat amet doloribus consequuntur eos similique provident
                tempora voluptates iure quia fuga dicta voluptatibus culpa
                mollitia recusandae delectus id suscipit labore?
              </p>
            </div>
          </div>
          <div className="group border-b border-zinc-400  py-1" tabIndex={2}>
            <div className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease">
              <div className="transition duration-500 ease-in group-hover:text-red-500">
                Is ther a mobile app?
              </div>

              <div className="transition duration-500 ease-in group-focus:-rotate-180 group-focus:text-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    d="M1 1l8 8 8-8"
                  />
                </svg>
              </div>
            </div>
            <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease-in">
              <p className="py-2 text-justify text-base font-normal text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                repellat amet doloribus consequuntur eos similique provident
                tempora voluptates iure quia fuga dicta voluptatibus culpa
                mollitia recusandae delectus id suscipit labore?
              </p>
            </div>
          </div>
          <div className="group border-b border-zinc-400  py-1" tabIndex={3}>
            <div className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease">
              <div className="transition duration-500 ease-in group-hover:text-red-500">
                What about other Chromium browsers
              </div>

              <div className="transition duration-500 ease-in group-focus:-rotate-180 group-focus:text-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    d="M1 1l8 8 8-8"
                  />
                </svg>
              </div>
            </div>
            <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease-in">
              <p className="py-2 text-justify text-base font-normal text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                repellat amet doloribus consequuntur eos similique provident
                tempora voluptates iure quia fuga dicta voluptatibus culpa
                mollitia recusandae delectus id suscipit labore?
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter section */}
      <div className="bg-[#5368DF] w-full">
        <section
          className={`${styles.container} max-w-lg py-20 px-5 mx-auto items-center flex justify-center`}
        >
          <div className="flex flex-col space-y-8 text-center">
            <h1 className="text-white text-2xl font-serif">
              35,000+ Already Joined
            </h1>
            <h1 className="text-4xl max-w-lg font-rubik font-semibold text-white">
              Stay up-to-date with what we're doing
            </h1>
            <div className="flex md:flex-row flex-col space-y-5 md:space-y-0 md:space-x-5 justify-center items-center">
              <input
                type="email"
                className="bg-white rounded-xl p-3"
                placeholder="Enter your email address"
              />
              <button className="px-4 py-3 text-white font-rubik rounded-xl  bg-[#E95864]">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
      {/* Footer */}
      <div className="w-full bg-[#252B46]">
        <div
          className={`${styles.container} mx-auto p-15 flex flex-col md:flex-row items-center md:justify-between`}
        >
          <div className="flex font-rubik flex-col md:flex-row md:space-x-8 items-center gap-5">
            <img
              src="/bookmark/images/logo-bookmark-footer.svg"
              className="object-contain"
              alt=""
            />
            <h1 className="uppercase text-lg text-zinc-400">Features</h1>
            <h1 className="uppercase text-lg text-zinc-400">Download</h1>
            <h1 className="uppercase text-lg text-zinc-400">FAQ</h1>
          </div>
          <div className="flex-row flex space-x-10 mt-8 md:mt-0">
            <img src="/bookmark/images/icon-facebook.svg" alt="facebook icon" />
            <img src="/bookmark/images/icon-twitter.svg" alt="facebook icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
