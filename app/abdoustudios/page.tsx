"use client";
import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";

const dataImages = [
  {
    imgDesktop: "/abdoustudios/images/desktop/image-deep-earth.jpg",
    imgMobile: "/abdoustudios/images/mobile/image-deep-earth.jpg",
    text: "DEEP EARTH",
  },
  {
    imgDesktop: "/abdoustudios/images/desktop/image-night-arcade.jpg",
    imgMobile: "/abdoustudios/images/mobile/image-night-arcade.jpg",
    text: "NIGHT ARCADE",
  },
  {
    imgDesktop: "/abdoustudios/images/desktop/image-soccer-team.jpg",
    imgMobile: "/abdoustudios/images/mobile/image-soccer-team.jpg",
    text: "SOCCER TEAM VR",
  },
  {
    imgDesktop: "/abdoustudios/images/desktop/image-grid.jpg",
    imgMobile: "/abdoustudios/images/mobile/image-grid.jpg",
    text: "THE GRID",
  },
  {
    imgDesktop: "/abdoustudios/images/desktop/image-from-above.jpg",
    imgMobile: "/abdoustudios/images/mobile/image-from-above.jpg",
    text: "FROM UP ABOVE VR",
  },
  {
    imgDesktop: "/abdoustudios/images/desktop/image-pocket-borealis.jpg",
    imgMobile: "/abdoustudios/images/mobile/image-pocket-borealis.jpg",
    text: "POCKET BOREALIS",
  },
  {
    imgDesktop: "/abdoustudios/images/desktop/image-curiosity.jpg",
    imgMobile: "/abdoustudios/images/mobile/image-curiosity.jpg",
    text: "THE CURIOSITY",
  },
  {
    imgDesktop: "/abdoustudios/images/desktop/image-fisheye.jpg",
    imgMobile: "/abdoustudios/images/mobile/image-fisheye.jpg",
    text: "MAKE IT FISHEYE",
  },
];

export default function page() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {/* 1: Hero section  */}
      <div className="w-full relative md:bg-[url('/abdoustudios/images/desktop/image-hero.jpg')] bg-cover bg-[url('/abdoustudios/images/mobile/image-hero.jpg')] md:h-[650px] h-[550px]">
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
            {!open ? (
              <MenuIcon
                className="z-10 md:hidden cursor-pointer"
                onClick={() => setOpen(!open)}
              />
            ) : (
              <XIcon
                className="z-10 md:hidden cursor-pointer"
                onClick={() => setOpen(!open)}
              />
            )}
            {open && (
              <div className="absolute inset-0 transition-all  duration-300  h-screen bg-black">
                <nav className="flex uppercase flex-col tracking-wider mt-30 p-15 space-y-4 ">
                  <a className="hover:text-pink-300" href="#">
                    About
                  </a>
                  <a className="hover:text-pink-300" href="#">
                    Careers
                  </a>
                  <a className="hover:text-pink-300" href="#">
                    Events
                  </a>
                  <a className="hover:text-pink-300" href="#">
                    Products
                  </a>
                  <a className="hover:text-pink-300" href="#">
                    Support
                  </a>
                </nav>
              </div>
            )}
          </div>
        </div>
        <div className="max-w-6xl md:text-6xl text-4xl  mt-24 px-10 mx-auto">
          <h1 className="max-w-lg uppercase font-thin tracking-wide text-left text-white border-2 pl-5 md:pl-12 pt-5 pb-5">
            Impressive Experiences That Deliver
          </h1>
        </div>
      </div>
      {/* section 2 */}
      <div className="md:max-w-6xl md:px-0 px-6  font-nunito mx-auto mt-30 mb-27">
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
      <div className="max-w-6xl font-nunito mx-auto mb-25">
        <div className="flex flex-col text-center md:flex-row justify-between mb-20">
          <h1 className="text-4xl md:text-5xl tracking-wider font-thin uppercase ">
            Our creations
          </h1>
          <button className=" hidden md:block border-2 text-xl uppercase bg-white hover:bg-black hover:text-white transition-all duration-200  tracking-widest px-5">
            See All
          </button>
        </div>
        <div className="grid p-4 w-full md:p-0 space-y-5 md:space-y-0 md:grid-cols-4 md:gap-8  grid-cols-1">
          {dataImages.map((item, index) => (
            <div key={index} className="group  relative">
              <div className="overflow-hidden">
                <img
                  className="hidden md:block w-full group-hover:scale-110 transition-all duration-300 "
                  src={item.imgDesktop}
                  alt=""
                />
                <img className="block md:hidden" src={item.imgMobile} alt="" />
              </div>

              <div className="absolute bottom-0 z-10 w-[80%] md:p-10 p-5  text-2xl text-white">
                <h1>{item.text}</h1>
              </div>
              <div className=" absolute inset-0 bg-white/90 opacity-0 group-hover:opacity-50 transition-all duration-300   "></div>
              <div className="absolute inset-0  bg-linear-to-b from-black/0 to-slate-900 opacity-100"></div>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER SECTION */}
      <div className="bg-black w-full font-nunito  text-white">
        <div className="max-w-6xl mx-auto flex flex-col  md:flex-row justify-between">
          <div className="flex mt-10 flex-col items-center md:items-start ">
            <h1 className="text-3xl font-bold">abdoustudios</h1>
            <nav className="flex flex-col md:flex-row md:mt-4 mt-7 items-center space-y-5 md:space-y-0 md:space-x-5 ">
              <div className="group">
                <a href="">About</a>
                <div className="border mx-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              </div>
              <div className="group">
                <a href="">Careers</a>
                <div className="border mx-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              </div>
              <div className="group">
                <a href="">Events</a>
                <div className="border mx-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              </div>
              <div className="group">
                <a href="">Products</a>
                <div className="border mx-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              </div>
              <div className="group">
                <a href="">Support</a>
                <div className="border mx-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              </div>
            </nav>
          </div>
          <div className="flex flex-col mt-10">
            <div className="flex flex-row space-x-5 md:justify-start justify-center ">
              <img
                src="/abdoustudios/images/icon-facebook.svg"
                className="w-5"
                alt=""
              />
              <img
                src="/abdoustudios/images/icon-instagram.svg"
                className="w-5"
                alt=""
              />
              <img
                src="/abdoustudios/images/icon-pinterest.svg"
                className="w-5"
                alt=""
              />
              <img
                src="/abdoustudios/images/icon-twitter.svg"
                className="w-5"
                alt=""
              />
            </div>
            <p className="mt-3 text-base font-thin text-center mb-15">
              © 2026 abdoustudios. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
