export default function Cookie() {
  return (
    <div className="fixed bottom-4 left-4 p-4 gap-4 font-nunito flex shadow-sm max-w-sm w-full rounded-xl flex-col bg-linear-to-r from-pink-200 to-purple-400 via-red-300">
      <div className="flex items-center gap-4">
        <img
          src="/cookies/images/cookie/img-1.png"
          alt="cookie"
          className="w-12"
        />
        <h2 className="text-2xl font-bold">Cookie Consent</h2>
      </div>
      <p className="text-black text-sm font-medium">
        This website uses cookies or similar technologies, to enhance your
        browsing experience and provide personalized recommendations.
      </p>
      <div className="flex w-full gap-4">
        <button className="text-white cursor-pointer hover:bg-zinc-900 duration-500 transition-all rounded-lg p-2 w-full bg-zinc-700">
          Accept
        </button>
        <button className="w-full p-2 border cursor-pointer hover:bg-zinc-900 hover:text-white duration-500 transition-all border-black rounded-lg">
          Decline
        </button>
      </div>
    </div>
  );
}
