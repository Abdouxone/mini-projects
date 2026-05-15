"use client";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function page() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div className="scroll-smooth">
      <div className="dark:bg-[#1C2431]  ">
        {/* header */}
        <div className="flex flex-col md:space-y-0 space-y-7 md:flex-row md:justify-between items-center p-10">
          <img
            src={
              theme === "dark"
                ? "/fylo/images/logo-dark-mode.svg"
                : "/fylo/images/logo-light-mode.svg"
            }
            alt=""
            className="md:w-fit w-44 "
          />
          <div className="flex md:space-x-10 md:text-lg space-x-3 font-nunito items-center">
            <a className="cursor-pointer hover:text-[#65E2B8] dark:text-white text-gray-800 ">
              Features
            </a>
            <a className="cursor-pointer hover:text-[#65E2B8] dark:text-white text-gray-800 ">
              Testimonials
            </a>
            <button
              onClick={() => {
                handleTheme();
              }}
            >
              {theme === "dark" ? (
                <SunIcon className="text-white" size={20} />
              ) : (
                <MoonIcon />
              )}
            </button>
          </div>
        </div>

        {/* hero */}
        <div>
          {/* hero */}
          <div className="  dark:bg-[url('/fylo/images/bg-curvy-dark-mode.svg')] bg-[url('/fylo/images/bg-curvy-light-mode.svg')] bg-no-repeat bg-bottom bg-contain  ">
            <div className=" bg-no-repeat flex pb-55 flex-col max-w-3xl mx-auto  p-5 space-y-10">
              <img src="/fylo/images/illustration-intro.png" alt="" />
              <div className="text-center font-nunito space-y-7 ">
                <h1 className="dark:text-white text-gray-800 md:text-4xl text-4xl font-semibold ">
                  All your files in one secure location, assessible anywhere.
                </h1>
                <p className="dark:text-grayishBlue text-gray-800 mx-auto text-base md:text-lg max-w-xl">
                  Fylo stores all your most important files in one secure
                  location. Access them wherever you need, share and collaborate
                  with friends family, and co-workers.
                </p>
                <button className="bg-[#65E2D9] hover:cursor-pointer hover:scale-95 dark:text-white text-black text-lg py-3 px-10 rounded-full">
                  Get Started
                </button>
              </div>
            </div>
          </div>

          {/* features */}
          <div className="dark:bg-[#181F2B] bg-[#F9FAFB] -mt-2">
            <div className="grid md:grid-cols-2  gap-10 grid-cols-1  max-w-6xl mx-auto pb-10">
              <div className="flex p-10 flex-col text-center items-center justify-center">
                <div className="mb-5">
                  <img src="/fylo/images/icon-access-anywhere.svg" alt="" />
                </div>

                <div className="space-y-3 max-w-md">
                  <h1 className="text-xl font-bold dark:text-white text-black ">
                    Access your file from anywhere
                  </h1>
                  <p className="text-lg font-normal dark:text-white text-black">
                    The ability to use a smartphone, tablet, or computer to
                    access your account means your files follow you everywhere.
                  </p>
                </div>
              </div>
              <div className="flex p-10 flex-col text-center items-center justify-center">
                <div className="mb-5">
                  <img src="/fylo/images/icon-security.svg" alt="" />
                </div>

                <div className="space-y-3 max-w-md">
                  <h1 className="text-xl font-bold dark:text-white text-black ">
                    Security you can trust
                  </h1>
                  <p className="text-lg font-normal dark:text-white text-black">
                    2-factor authentication and user-controlled encryption are
                    just a couple of the security features we allow to help
                    secure your files.
                  </p>
                </div>
              </div>
              <div className="flex p-10 flex-col text-center items-center justify-center">
                <div className="mb-5">
                  <img src="/fylo/images/icon-collaboration.svg" alt="" />
                </div>

                <div className="space-y-3 max-w-md">
                  <h1 className="text-xl font-bold dark:text-white text-black ">
                    Access your file from anywhere
                  </h1>
                  <p className="text-lg font-normal dark:text-white text-black">
                    The ability to use a smartphone, tablet, or computer to
                    access your account means your files follow you everywhere.
                  </p>
                </div>
              </div>
              <div className="flex p-10 flex-col text-center items-center justify-center">
                <div className="mb-5">
                  <img src="/fylo/images/icon-any-file.svg" alt="" />
                </div>

                <div className="space-y-3 max-w-md">
                  <h1 className="text-xl font-bold dark:text-white text-black ">
                    Security you can trust
                  </h1>
                  <p className="text-lg font-normal dark:text-white text-black">
                    2-factor authentication and user-controlled encryption are
                    just a couple of the security features we allow to help
                    secure your files.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* productive section and testimonial section*/}
          <div className="dark:bg-[#1C2431] bg-[#FFFFFF]  ">
            <div className="flex flex-col pb-25 p-10 gap-10 items-center md:flex-row  max-w-7xl mx-auto pt-20">
              <div className=" ">
                <img
                  src="/fylo/images/illustration-stay-productive.png"
                  alt=""
                  className="w-250"
                />
              </div>
              <div className="text-left flex flex-col space-y-6">
                <h1 className="dark:text-white text-black font-bold text-3xl  max-w-sm md:text-4xl">
                  Stay productive, wherever you are
                </h1>
                <p className="md:text-lg dark:text-grayishBlue text-black text-base">
                  Never let location be an issue when accessing your files. Fylo
                  has you covered for all of your file storage needs.
                </p>
                <p className="md:text-lg dark:text-grayishBlue text-black text-base">
                  Securely share files and folders with friends, family and
                  colleagues for live collaboration. No email attachments
                  required.
                </p>
                <a
                  href=""
                  className="underline underline-offset-3  text-[#65E2D9] flex  items-center space-x-2"
                >
                  <span>See how Fylo works</span>
                  <img src="/fylo/images/icon-arrow.svg" alt="" />
                </a>
              </div>
            </div>
            {/* testimonials */}
            <div className="w-full relative dark:bg-[#1C2431] bg-[#F9FAFB] ">
              <div className="max-w-7xl  pb-90 mx-auto flex items-center gap-10 flex-col p-10 md:flex-row">
                <div className="flex relative space-y-5 flex-col md:max-w-sm  rounded-lg bg-[#202A3C] p-10">
                  <img
                    src="/fylo/images/bg-quotes.png"
                    alt="bg-quotes"
                    className="absolute md:-top-14 md:-left-8 left-2 -top-8 w-10 md:w-17 "
                  />
                  <p className="md:text-lg text-base font-normal  text-white">
                    Fylo has improved our team productivity by an order of
                    magnitude. Since making the switch our team has become a
                    well-oiled collaboration machine.
                  </p>
                  <div className="flex space-x-4 flex-row items-center">
                    <img
                      src="/fylo/images/profile-1.jpg"
                      alt="profile 1"
                      className="w-12 rounded-full"
                    />
                    <div className="flex flex-col text-left ">
                      <p className="text-sm  text-white font-bold">
                        Satish Patel
                      </p>
                      <p className="text-sm  text-white ">
                        Founder & CEO. Huddle
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex space-y-5 flex-col md:max-w-sm rounded-lg bg-[#202A3C] p-10">
                  <p className="md:text-lg text-base font-normal text-white">
                    Fylo has improved our team productivity by an order of
                    magnitude. Since making the switch our team has become a
                    well-oiled collaboration machine.
                  </p>
                  <div className="flex space-x-4 flex-row items-center">
                    <img
                      src="/fylo/images/profile-2.jpg"
                      alt="profile 2"
                      className="w-12 rounded-full"
                    />
                    <div className="flex flex-col text-left ">
                      <p className="text-sm  text-white font-bold">
                        Bruce McKenzie
                      </p>
                      <p className="text-sm  text-white ">
                        Founder & CEO. Huddle 2
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex space-y-5 flex-col md:max-w-sm  rounded-lg bg-[#202A3C] p-10">
                  <p className="md:text-lg text-base font-normal text-white">
                    Fylo has improved our team productivity by an order of
                    magnitude. Since making the switch our team has become a
                    well-oiled collaboration machine.
                  </p>
                  <div className="flex space-x-4 flex-row items-center">
                    <img
                      src="/fylo/images/profile-3.jpg"
                      alt="profile 3"
                      className="w-12 rounded-full"
                    />
                    <div className="flex flex-col text-left ">
                      <p className="text-sm  text-white font-bold">Eva Boyd</p>
                      <p className="text-sm  text-white ">
                        Founder & CEO. Huddle 3
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* early access section */}
              <div className="flex flex-col absolute space-y-5  -bottom-20 left-1/2 -translate-x-1/2 w-full rounded-lg justify-center items-center md:max-w-4xl max-w-md p-10 bg-[#E5E7EB] dark:bg-[#181F2A]">
                <h1 className="dark:text-white text-2xl font-bold">
                  Get early access today
                </h1>
                <p className="dark:text-white font-normal text-base text-center">
                  It only takes a minute to sign up and our free starter tier is
                  extremely generous. If you have any questions, our support
                  team would be happy to help you.
                </p>
                <div className="flex md:flex-row flex-col w-full space-y-5 md:space-y-0 justify-center md:space-x-5 ">
                  <input
                    className="bg-white md:w-1/2 p-2   w-full border-0 outline-none  rounded-full text-black"
                    type="text"
                    placeholder="email@example.com"
                  />
                  <button className="text-lg whitespace-nowrap bg-[#65E2D9] rounded-full px-5 py-2">
                    Get started for free
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* footer */}
          <div className="bg-[#0B1523] text-white p-20 pt-60 space-y-10 flex md:flex-row flex-col  justify-between">
            <div className="flex flex-col space-y-4">
              <div className="flex flex-row items-center space-x-3">
                <img src="/fylo/images/icon-phone.svg" alt="" />
                <h1>+213-000-00-0000</h1>
              </div>
              <div className="flex flex-row items-center space-x-3">
                <img src="/fylo/images/icon-email.svg" alt="" />
                <h1>example@fylo.com</h1>
              </div>
            </div>
            <div className="flex md:flex-row flex-col  gap-10 items-start">
              <div className="flex space-y-3 flex-col">
                <a href="">About</a>
                <a href="">Jobs</a>
                <a href="">Press</a>
                <a href="">Blog</a>
              </div>
              <div className="flex space-y-3 flex-col">
                <a href="">Contact Us</a>
                <a href="">Terms</a>
                <a href="">Privacy</a>
              </div>
            </div>
            <div className="flex flex-row gap-3  md:justify-start justify-center">
              <img
                className="w-10 h-10"
                src="/fylo/images/facebook.svg"
                alt=""
              />
              <img
                className="w-10 h-10"
                src="/fylo/images/twitter.svg"
                alt=""
              />
              <img
                className="w-10 h-10"
                src="/fylo/images/instagram.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
