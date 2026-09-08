export default function Cookies() {
  return (
    <div className="fixed p-4 space-y-5 rounded-lg border border-blue-100 bottom-4 right-4 max-w-sm bg-blue-100/40">
      <div className="flex flex-row items-center gap-2">
        <img
          src="/cookies/images/cookie/img-1.png"
          className="h-10"
          alt="Cookie Picture"
        />
        <h2 className="text-2xl font-medium">Cookie Consent</h2>
      </div>

      <p className="text-sm text-zinc-500 font-normal">
        This Website uses cookies or similar technlogies, to enhance your
        browsing experience and provide personalized recommendations. By
        continuing to use our website, you agree to our{" "}
        <span className="text-blue-600">Privacy Policy</span>
      </p>

      <div className="flex space-x-5 justify-between">
        <button className="bg-blue-400 h-10 rounded-lg cursor-pointer hover:bg-blue-600 transition-all duration-500 text-white w-full">
          Accept
        </button>
        <button className="w-full text-blue-400 h-10 cursor-pointer rounded-lg hover:text-white hover:bg-blue-600 transition-all duration-500 border-blue-300 border">
          Decline
        </button>
      </div>
    </div>
  );
}
