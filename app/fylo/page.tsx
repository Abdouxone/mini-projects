import { SunIcon } from "lucide-react";

export default function page() {
  return (
    <div className="scroll-smooth">
      <div className="dark:bg-[#1C2431]">
        {/* header */}
        <div className="flex flex-col md:space-y-0 space-y-7 md:flex-row md:justify-between items-center p-10">
          <img
            src="/fylo/images/logo-dark-mode.svg"
            alt=""
            className="md:w-fit w-44 "
          />
          <div className="flex md:space-x-10 md:text-lg space-x-3 font-nunito items-center">
            <a className="cursor-pointer hover:text-[#65E2B8] text-white ">
              Features
            </a>
            <a className="text-white cursor-pointer hover:text-[#65E2B8] ">
              Testimonials
            </a>
            <SunIcon className="text-white" size={20} />
          </div>
        </div>

        {/* hero */}
        <div>
          {/* hero */}
          <div className="  bg-[url('/fylo/images/bg-curvy-dark-mode.svg')] bg-no-repeat bg-bottom bg-contain  ">
            <div className=" bg-no-repeat flex pb-55 flex-col max-w-3xl mx-auto  p-5 space-y-10">
              <img src="/fylo/images/illustration-intro.png" alt="" />
              <div className="text-center font-nunito space-y-7 ">
                <h1 className="text-white md:text-4xl text-4xl font-semibold ">
                  All your files in one secure location, assessible anywhere.
                </h1>
                <p className="mx-auto text-base md:text-lg max-w-xl">
                  Fylo stores all your most important files in one secure
                  location. Access them wherever you need, share and collaborate
                  with friends family, and co-workers.
                </p>
                <button className="bg-[#65E2D9] hover:cursor-pointer hover:scale-95 text-white text-lg py-3 px-10 rounded-full">
                  Get Started
                </button>
              </div>
            </div>
          </div>

          {/* features */}
          <div className="bg-[#181F2B] -mt-2">
            <div className="grid md:grid-cols-2  gap-10 grid-cols-1  max-w-6xl mx-auto pb-10">
              <div className="flex p-10 flex-col text-center items-center justify-center">
                <div className="mb-5">
                  <img src="/fylo/images/icon-access-anywhere.svg" alt="" />
                </div>

                <div className="space-y-3 max-w-md">
                  <h1 className="text-xl font-bold text-white ">
                    Access your file from anywhere
                  </h1>
                  <p className="text-lg font-normal text-white">
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
                  <h1 className="text-xl font-bold text-white ">
                    Security you can trust
                  </h1>
                  <p className="text-lg font-normal text-white">
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
                  <h1 className="text-xl font-bold text-white ">
                    Access your file from anywhere
                  </h1>
                  <p className="text-lg font-normal text-white">
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
                  <h1 className="text-xl font-bold text-white ">
                    Security you can trust
                  </h1>
                  <p className="text-lg font-normal text-white">
                    2-factor authentication and user-controlled encryption are
                    just a couple of the security features we allow to help
                    secure your files.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* productive section and testimonial section*/}
          <div className="bg-[#1C2431]">
            <div className="flex flex-col pb-25 p-10 gap-10 items-center md:flex-row max-w-7xl mx-auto mt-20">
              <div className=" ">
                <img
                  src="/fylo/images/illustration-stay-productive.png"
                  alt=""
                  className="w-250"
                />
              </div>
              <div className="text-left flex flex-col space-y-6">
                <h1 className="text-white font-bold text-3xl  max-w-sm md:text-4xl">
                  Stay productive, wherever you are
                </h1>
                <p className="md:text-lg text-base">
                  Never let location be an issue when accessing your files. Fylo
                  has you covered for all of your file storage needs.
                </p>
                <p className="md:text-lg text-base">
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
            <div className="max-w-7xl pb-20 mx-auto flex items-center gap-10 flex-col p-10 md:flex-row">
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
          </div>
        </div>
      </div>
    </div>
  );
}
