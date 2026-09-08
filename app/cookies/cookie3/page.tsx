import { X } from "lucide-react";

export default function Cookie() {
  return (
    <div className="fixed  font-nunito bottom-4 max-w-sm w-full  shadow-xl rounded-xl left-4 ">
      <div className="bg-linear-to-r from-pink-400 mb-15 rounded-t-xl  via-purple-300 to-indigo-400 p-15 relative">
        <img
          src="/cookies/images/cookie/img-2.png"
          alt="cookie"
          className="absolute h-40 drop-shadow-lg -translate-x-1/2 left-1/2 top-5 "
        />
        <X
          size={24}
          className="cursor-pointer rounded-full hover:bg-white/20 transition-all duration-400 absolute top-2 right-2"
        />
      </div>
      <div className="flex flex-col p-5 space-y-5">
        <h2 className="text-xl text-center font-semibold">We uses cookies</h2>
        <p className="text-base text-center text-zinc-700  font-normal">
          This website uses cookies to ensure you get the best experience on our
          website.
        </p>
        <div className="items-center justify-center flex">
          <button className="bg-linear-to-r text-white cursor-pointer rounded-full px-8 py-2 from-pink-400 via-purple-300 to-indigo-400">
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
