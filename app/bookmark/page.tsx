import styles from "./page.module.css";
export default function page() {
  return (
    <div className="overflow-x-hidden scroll-smooth">
      {/* header */}
      <div
        className={`${styles.container} mx-auto flex font-rubik flex-row justify-between px-3 py-10 items-center `}
      >
        <img src="/bookmark/images/logo-bookmark.svg" alt="" />
        <nav className="space-x-10 items-center hidden md:flex uppercase text-lg text-[#9CA3AF]">
          <a href="" className="hover:text-[#FA5757]">
            Features
          </a>
          <a href="" className="hover:text-[#FA5757]">
            Download
          </a>
          <a href="" className="hover:text-[#FA5757]">
            FAQ
          </a>
          <button className="bg-[#FA5757] border-2 border-[#FA5757] hover:bg-white hover:text-[#FA5757] py-2 px-8 rounded-lg text-white ">
            Login
          </button>
        </nav>
        {/* mobile menu */}
        <div className="flex md:hidden">
          <button>
            <img
              className="w-5"
              src="/bookmark/images/icon-hamburger.svg"
              alt=""
            />
          </button>
        </div>
      </div>
      {/* hero */}
      <div
        className={`${styles.container}  h-auto mx-auto  px-3  flex-col-reverse flex lg:flex-row `}
      >
        <div className="flex flex-col min-[1020px]:mt-20 text-center min-[1020px]:text-left  space-y-8 min-[1440px]:max-w-xl">
          <h1 className="font-rubik min-[1020px]:text-6xl  text-3xl font-semibold">
            A Simple Bookmark Manager
          </h1>
          <p className="font-normal text-lg min-[1020px]:text-2xl mx-auto min-[1020px]:mx-0 max-w-md font-rubik">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className="flex flex-row items-center justify-center min-[1020px]:justify-start font-rubik font-medium space-x-5">
            <button className="bg-[#5468D7] min-[1220px]:p-4 p-3 text-white min-[1220px]:text-lg text-sm rounded-lg">
              Get It On Chrome
            </button>
            <button className="bg-[#D1D5DB] min-[1220px]:p-4 p-3 text-black min-[1220px]:text-lg text-sm rounded-lg">
              Get It On Firefox
            </button>
          </div>
        </div>
        <div className="flex relative ">
          <div className="bg-[#5368DF] hidden min-[1020px]:block h-[300px] left-50 absolute top-60 rounded-l-full w-[800px] "></div>
          <img
            src="/bookmark/images/illustration-hero.svg"
            alt=""
            className="relative z-10 min-[1020px]:mb-20 h-auto w-auto min-[1020px]:top-40 min-[1440px]:top-0 min-[1440px]:ml-25 "
          />
        </div>
      </div>
    </div>
  );
}
