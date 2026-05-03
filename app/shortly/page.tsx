export default function page() {
  return (
    <div>
      {/* header */}
      <div className="max-w-7xl bg-red-300 font-nunito mx-auto">
        <div className="flex flex-row items-center p-5 justify-between">
          <div className="flex flex-row items-center space-x-17">
            <img src="/shortly/images/logo.svg" alt="logo" />
            <nav className="lg:flex hidden items-center space-x-5">
              <a className="p-4 font-bold text-zinc-500 text-lg" href="">
                Features
              </a>
              <a className="p-4 font-bold text-zinc-500 text-lg" href="">
                Pricing
              </a>
              <a className="p-4 font-bold text-zinc-500 text-lg" href="">
                Resources
              </a>
            </nav>
          </div>
          <div className="hidden md:flex items-center justify-center ">
            <div className="p-4 font-bold text-zinc-500 text-lg">Login</div>
            <div className="px-7 py-2 font-bold  text-white text-lg rounded-3xl bg-strong-cyan">
              Sign Up
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
