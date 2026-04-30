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

        <img
          src="/clipboard/images/image-devices.png"
          alt=""
          className="px-5"
        />
      </div>

      {/* Section 5 */}

      <div className="flex flex-col items-center space-y-15 justify-center mt-10 p-10">
        <div className="font-bai text-center">
          <h3>Supercharge your workflow</h3>
          <p>We've got the tools to boost your productivity</p>
        </div>

        <div className="flex flex-col w-full max-w-6xl md:space-x-10 md:flex-row space-y-13 md:space-y-0  font-bai text-center items-center justify-center ">
          <div className="flex flex-col items-center justify-center space-y-5">
            <img
              src="/clipboard/images/icon-blacklist.svg"
              className="w-10"
              alt=""
            />
            <h1 className="text-2xl font-semibold text-zinc-600">
              Create Blacklists
            </h1>
            <p className="text-base max-w-sm">
              Easily search your snippets by content, category, web address,
              application, and more.
            </p>
          </div>
          {/* item 2 */}
          <div className="flex flex-col items-center justify-center space-y-5">
            <img
              src="/clipboard/images/icon-text.svg"
              className="w-10"
              alt=""
            />
            <h1 className="text-2xl font-semibold text-zinc-600">
              Plain Text Snippets
            </h1>
            <p className="text-base  max-w-sm">
              Remove unwanted formatting from copied text for a consistent look.
            </p>
          </div>
          {/* item 3 */}
          <div className="flex flex-col items-center justify-center space-y-5">
            <img
              src="/clipboard/images/icon-preview.svg"
              className="w-10"
              alt=""
            />
            <h1 className="text-2xl font-semibold text-zinc-600">
              Sneak Preview
            </h1>
            <p className="text-base max-w-sm">
              Quick preview of all snippets on your Clipboard for easy access.
            </p>
          </div>
        </div>
      </div>

      {/* section 6 */}

      <div className="max-w-6xl p-10 mt-20">
        <div className="flex flex-col md:flex-row justify-center items-center gap-20">
          <div>
            <img src="/clipboard/images/logo-google.png" alt="" />
          </div>
          <div>
            <img src="/clipboard/images/logo-ibm.png" alt="" />
          </div>
          <div>
            <img src="/clipboard/images/logo-microsoft.png" alt="" />
          </div>
          <div>
            <img src="/clipboard/images/logo-hp.png" alt="" />
          </div>
          <div>
            <img src="/clipboard/images/logo-vector-graphics.png" alt="" />
          </div>
        </div>
      </div>

      {/* section 7 */}
      <div className="max-w-6xl flex flex-col text-center mt-20 p-10 space-y-10">
        <h3>Clipboard for IOS and MacOs</h3>
        <p className="max-w-3xl">
          Available for free on the App Store. Download for Mac or iOS, sync
          with iCloud and you're ready to start adding to your clipboard.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:px-30 ">
          <div className=" bg-strong-cyan py-4  px-5  text-xl rounded-full hover:cursor-pointer text-white w-full">
            Download for IOS
          </div>
          <div className=" bg-lightBlue text-white py-4 text-xl hover:cursor-pointer px-5 rounded-full w-full">
            Download for MAC
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="py-5 mt-10 flex items-center justify-center  bg-gray-100 w-full">
        <div className="max-w-6xl ">
          <div className="flex flex-col md:flex-row  md:space-x-20 font-bai gap-2 text-grayishBlue text-base items-center justify-center md:text-left text-center  ">
            {/*logo */}
            <img
              src="/clipboard/images/logo.svg"
              alt=""
              className="w-15 mb-5 md:mb-0"
            />
            <div className="flex-col flex gap-2 ">
              <a href="" className="hover:text-strong-cyan">
                FAQs
              </a>
              <a href="" className="hover:text-strong-cyan">
                Contact Us
              </a>
            </div>
            <div className="flex-col flex gap-2">
              <a href="" className="hover:text-strong-cyan">
                Privacy Policy
              </a>
              <a href="" className="hover:text-strong-cyan">
                Press Kit
              </a>
            </div>
            <div className="flex-col flex gap-2 ">
              <a href="" className="hover:text-strong-cyan">
                Install Guide
              </a>
            </div>

            <div className="md:ml-30 flex mt-3 gap-8">
              <img
                src="/clipboard/images/icon-facebook.svg"
                className="hover:fill-strong-cyan"
                alt=""
              />
              <img src="/clipboard/images/icon-twitter.svg" alt="" />
              <img src="/clipboard/images/icon-instagram.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
