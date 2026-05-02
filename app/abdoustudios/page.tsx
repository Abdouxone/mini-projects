export default function page() {
  return (
    <div>
      {/* 1: Hero section  */}
      <div className="w-full md:bg-[url('/abdoustudios/images/desktop/image-hero.jpg')] bg-cover bg-[url('/abdoustudios/images/mobile/image-hero.jpg')] md:h-[650px] h-[550px]">
        <div className="max-w-6xl p-10 flex items-center justify-center mx-auto text-white">
          <div className="flex w-full justify-between items-center">
            <h1 className="text-4xl font-bold font-nunito">abdoustudios</h1>
            <nav className=" gap-5 font-nunito hidden md:flex text-base font-semibold">
              <a className="hover:border-b " href="">
                About
              </a>
              <a className="hover:border-b " href="">
                Careers
              </a>
              <a className="hover:border-b " href="">
                Events
              </a>
              <a className="hover:border-b " href="">
                Products
              </a>
              <a className="hover:border-b " href="">
                Support
              </a>
            </nav>
          </div>
        </div>
        <div className="max-w-6xl md:text-6xl text-4xl  mt-24 px-10 mx-auto">
          <h1 className="max-w-lg uppercase font-thin tracking-wide text-left text-white border-2 pl-5 md:pl-12 pt-5 pb-5">
            Impressive Experiences That Deliver
          </h1>
        </div>
      </div>
      {/* section 2 */}
      <div className="md:max-w-6xl md:px-0 px-6  font-nunito mx-auto mt-30 mb-50">
        <div className="flex relative flex-col md:flex-row space-y-10 md:space-y-0">
          <img
            className="w-190 hidden md:block"
            src="/abdoustudios/images/desktop/image-interactive.jpg"
            alt=""
          />
          <img
            className=" block md:hidden"
            src="/abdoustudios/images/mobile/image-interactive.jpg"
            alt=""
          />
          <div className="md:absolute md:text-left text-center bottom-0 right-0 bg-white md:p-15">
            <h1 className="text-5xl font-extralight max-w-md tracking-wide">
              The leader in interactive VR
            </h1>
            <p className="md:max-w-md text-zinc-700 text-sm mt-5 leading-6 font-thin">
              Founded in 2011, abdoustudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </div>
      </div>
      {/* OUR CREATIONS SECTION */}
    </div>
  );
}
