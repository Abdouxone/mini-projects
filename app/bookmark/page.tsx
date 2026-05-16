"use client";
import { useState } from "react";
import styles from "./page.module.css";

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
  const [feature, setFeature] = useState(features[0]);
  return (
    <div className=" ">
      {/* header */}
      <div
        className={`${styles.container} mx-auto flex font-rubik flex-row justify-between px-3 py-10 items-center `}
      >
        <img src="/bookmark/images/logo-bookmark.svg" alt="" />
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
        <div className="flex md:hidden">
          <button>
            <img
              className="w-5"
              src="/bookmark/images/icon-hamburger.svg"
              alt=""
            />
          </button>
        </div>
      </div>
      {/* hero */}
      <div className="overflow-x-hidden relative">
        <div
          className={`${styles.container}    mx-auto  px-5  flex-col-reverse flex lg:flex-row `}
        >
          <div className="flex flex-col min-[1020px]:mt-20 text-center min-[1020px]:text-left  space-y-8 min-[1440px]:max-w-xl">
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
          <div className="flex relative   ">
            <div className="bg-[#5368DF]  hidden min-[1020px]:block h-[300px] right-0 absolute top-60 rounded-l-full translate-x-50 w-[800px] "></div>
            <img
              src="/bookmark/images/illustration-hero.svg"
              alt=""
              className="relative z-10 min-[1020px]:mb-20 h-auto w-auto min-[1020px]:top-40 min-[1440px]:top-0 min-[1440px]:ml-25 "
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
        <div className="flex   mx-auto text-zinc-700 mt-10 font-rubik text-lg flex-col md:flex-row min-[1020px]:space-x-10 text-center min-[1020px]:text-start min-[1020px]:space-y-0 space-y-10">
          <h1
            className="cursor-pointer  focus:border-b-2 border-[#FA5757] hover:text-[#FA5757]"
            onClick={() => setFeature(features[0])}
          >
            Simple Bookmarking
          </h1>
          <h1
            className="cursor-pointer   hover:text-[#FA5757]"
            onClick={() => setFeature(features[1])}
          >
            Speedy Searching
          </h1>
          <h1
            className="cursor-pointer   hover:text-[#FA5757]"
            onClick={() => setFeature(features[2])}
          >
            Easy Sharing
          </h1>
        </div>
        <div className="flex flex-col space-y-10 min-[1020px]:space-y-0 min-[1020px]:flex-row  mt-10  items-center ">
          <div className="relative ">
            <div className="bg-[#5368DF] h-[300px] hidden min-[1020px]:block w-[800px] absolute top-35 -left-60 rounded-r-full"></div>
            <img
              src={feature.img}
              alt=""
              className="w-auto h-auto min-[1020px]:left-30 relative z-10 "
            />
          </div>
          <div className="flex  top-0 text-center min-[1020px]:text-left relative flex-col min-[1020px]:items-start  items-center font-rubik min-[1020px]:ml-50 max-w-md space-y-8">
            <h1 className="text-3xl font-semibold">{feature.title}</h1>
            <p className="text-base font-normal">{feature.description}</p>
            <button className=" text-base font-medium rounded-lg bg-[#5468DF] text-white py-3 px-8">
              More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
