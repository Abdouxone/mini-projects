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
      <div className="flex flex-col items-center mt-30 mb-10 space-y-10 max-w-6x px-10  ">
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

      <div className="flex flex-col mt-30 items-center space-y-5 max-w-6xl px-10 ">
        <div className="font-bai text-center space-y-10">
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-600 ">
            Keep track of your snippets
          </h1>
          <p className="text-xl max-w-3xl text-zinc-400 leading-9">
            Clipboard instatly stores any item you copy in the cloud, meaning
            you can access you snippets immediately on all your devices. Our Mac
            and IOS apps will help you organize everything
          </p>
        </div>
      </div>

      {/* section 3 */}
      <div className="font-bai ">
        <div className="flex flex-col px-10 relative md:flex-row mt-15 max-w-6xl space-x-32">
          <div className="w-full ">
            <img
              src="/clipboard/images/image-computer.png"
              alt=""
              className="md:absolute md:right-[50%]"
            />
          </div>

          <div className="mt-10 space-y-3 md:text-left text-center">
            {/* text 1 */}
            <h1 className="md:text-3xl text-2xl font-semibold text-zinc-600 ">
              Quick Search
            </h1>
            <p>
              Easily search your snippets by content, category, web address,
              application, and more..
            </p>
            {/* text 2 */}
            <h1 className="md:text-3xl text-2xl text-zinc-600 font-semibold">
              icloud Sync
            </h1>
            <p>Instantly saves and syncs snippets across all your devices.</p>
            {/* text 3 */}
            <h1 className="md:text-3xl text-2xl text-zinc-600 font-semibold ">
              Completely History
            </h1>
            <p>
              Retrieve any snippets from the first moment you started using the
              app.
            </p>
          </div>
        </div>
      </div>

      {/* Section 4 */}

      <div className="flex font-bai flex-col md:mt-100 mt-30 max-w-6xl space-y-10 items-center">
        <div className="text-center p-10">
          <h3>Access Clipboard Anywhere</h3>
          <p className="max-w-3xl">
            Whether you're on the go, or at your computer, you can access all
            your Clipboard snippets in a few simple clicks
          </p>
        </div>

        <img src="/clipboard/images/image-devices.png" alt="" className="" />
      </div>

      {/* Section 5 */}
    </div>
  );
}
