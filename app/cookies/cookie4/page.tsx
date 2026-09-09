export default function Cookie() {
  return (
    <div className="fixed bottom-4 flex  justify-center w-full">
      <div className=" bg-white shadow-2xl max-w-md p-5 items-center sm:items-start gap-3 rounded-xl w-full sm:flex-row flex-col flex">
        <img
          src="/cookies/images/cookie/img-1.png"
          alt="cookie"
          className="h-10 w-10 "
        />
        <div className="flex font-nunito flex-col  space-y-3">
          <h2 className="text-2xl font-semibold">Cookie Consent</h2>
          <p className="text-zinc-700 text-base font-normal">
            This website uses cookies or similar technologies, to enhance your
            browsing experience and provide personalized recommendations. By
            continuing to use our website, you agree to our{" "}
            <a href="#" className="text-blue-500">
              Privacy Policy
            </a>
          </p>
          <div className="sm:flex-row flex flex-col justify-between gap-3   ">
            <button className="bg-blue-500 shadow-xl py-2 cursor-pointer hover:bg-blue-700 transition-all duration-500  w-full rounded-full text-white">
              Accept
            </button>
            <button className="border text-blue-500 shadow-xl py-2 cursor-pointer hover:bg-blue-700 hover:text-white transition-all duration-500 w-full border-blue-500 rounded-full ">
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
