import React from "react";

export default function page() {
  return (
    <div className="flex flex-col relative min-h-screen bg-white items-center justify-center">
      <img
        src="/clipboard/images/bg-header-desktop.png"
        alt=""
        className="absolute top-0 left-0 right-0 w-full"
      />
      {/* section 1 */}
      <div className="flex flex-col items-center mt-20 space-y-5 w-[80%] ">
        <div>
          <img src="/clipboard/images/logo.svg" alt="" className="w-32" />
        </div>
        <h3 className="text-center font-bai">
          A history of everything you copy
        </h3>
        <div className="text-center font-bai ">
          <p className="text-2xl max-w-3xl  text-zinc-400">
            Clipboard allows you to track and organize everything you copy.
            Instantly access your clipboard on all you devices.
          </p>
        </div>

        <div className=" flex md:flex-row flex-col font-bai md:w-fit w-full  justify-center  md:gap-5 gap-4 mt-5">
          <div className="bg-strong-cyan py-4 px-7 text-center transition-all duration-300 rounded-full hover:-translate-y-1 text-xl text-white hover:shadow-xl">
            Download for Ios
          </div>
          <div className="bg-lightBlue py-4 px-7 text-center transition-all hover:shadow-xl hover:-translate-y-1 duration-300 rounded-full text-xl text-white">
            Download for Mac
          </div>
        </div>
      </div>

      {/* section 2 */}

      <div className="flex flex-col items-center mt-20 space-y-5 w-[80%] ">
        <div className="font-bai text-center space-y-10">
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-600 ">
            Keep track of your snippets
          </h1>
          <p className="text-2xl max-w-3xl text-zinc-400 leading-9">
            Clipboard instatly stores any item you copy in the cloud, meaning
            you can access you snippets immediately on all your devices. Our Mac
            and IOS apps will help you organize everything
          </p>
        </div>
      </div>
      {/* <div>
        <div className="flex flex-col md:flex-row mt-15">
          <div>
            <img src="/clipboard/images/image-computer.png" alt="" />
          </div>
          <div className="mt-10 space-y-5">
            <h1 className="text-center font-semibold text-zinc-600 text-3xl md:text-4xl">
              Quick Search
            </h1>
            <p className="text-zinc-400 text-xl">
              Easily search your snippets by content, category, web address,
              application, and more.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
}
