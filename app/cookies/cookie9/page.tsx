export default function Cookie() {
  return (
    <div className="fixed max-w-sm gap-4 font-nunito bottom-4 bg-white border border-gray-100 shadow-lg rounded-xl  justify-center items-center right-4 w-full flex flex-col">
      <img
        src="/cookies/images/cookie/img-1.png"
        alt="cookie"
        className="w-15 h-15 mt-5"
      />
      <p className="text-zinc-700 p-4 text-center text-base font-medium">
        The website uses cookies to ensure you get the best experience on our
        website.
      </p>
      <div className="flex w-full">
        <button className="bg-zinc-700 cursor-pointer border-t border-gray-200 hover:bg-zinc-900 transition-all duration-500 p-3 rounded-bl-xl  text-white w-full">
          Accept
        </button>
        <button className="w-full p-3 cursor-pointer border-t border-gray-200 rounded-br-xl hover:bg-zinc-900 hover:text-white transition-all duration-500 ">
          Decline
        </button>
      </div>
    </div>
  );
}
