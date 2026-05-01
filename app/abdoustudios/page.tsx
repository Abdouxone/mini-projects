export default function page() {
  return (
    <div>
      {/* 1: Hero section  */}
      <div className="w-full md:bg-[url('/abdoustudios/images/desktop/image-hero.jpg')] bg-[url('/abdoustudios/images/mobile/image-hero.jpg')] md:h-[650px] h-[550px]">
        <div className="max-w-6xl p-10 flex items-center justify-center mx-auto text-white">
          <div className="flex bg-red-500 w-full justify-between items-center">
            <h1 className="text-4xl font-bold font-nunito">abdoustudioss</h1>
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
      </div>
    </div>
  );
}
