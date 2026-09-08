export default function Cookie() {
  return (
    <div className="fixed bottom-4  font-nunito right-4 p-4 space-y-3 rounded-lg shadow-xl max-w-sm w-full bg-blue-50 border border-black/10 flex flex-col">
      <div className="flex items-center gap-4">
        <h2 className="text-2xl  font-semibold">Want a Cookie?</h2>
        <img
          src="/cookies/images/cookie/img-1.png"
          className="h-10"
          alt="cookie"
        />
      </div>

      <p className="text-sm font-normal text-zinc-600">
        This website uses cookies or similar sto enhance your browsing
        experience and provide personalized recommendations.
      </p>
      <p className="text-sm font-normal text-zinc-600">
        By continuing to use our website, you agree to our{" "}
        <a href="#" className="text-blue-500">
          Privacy Policy
        </a>
      </p>

      <button className="bg-blue-500 w-full p-2 rounded cursor-pointer hover:bg-blue-700 transition-all duration-500 text-white">
        Accept
      </button>
      <button className="bg-white w-full p-2 rounded cursor-pointer hover:bg-blue-700 hover:text-white transition-all duration-500 text-blue-500 border border-blue-500">
        Decline
      </button>
    </div>
  );
}
