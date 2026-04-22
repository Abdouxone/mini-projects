import React from "react";
import { Check } from "lucide-react";

export default function page() {
  return (
    <div className="bg-slate-800 min-h-screen justify-center items-center flex">
      <div className="flex md:flex-row flex-col mt-7 md:mt-0 md:space-y-0 mb-5 space-y-5 items-center md:space-x-5 justify-center">
        {/* card 1 */}
        <div className="flex flex-col w-50 h-90 border-8 border-slate-500/50 rounded-xl">
          <p className="text-white uppercase text-center mt-5">Basic</p>
          <p className="text-center text-4xl font-serif text-white mt-5">
            100GB
          </p>
          <p className="text-white text-center text-sm mt-2">490 DA/month</p>
          <button className="text-white border hover:bg-purple-500/50 transition-all hover:text-white w-30 mx-auto mt-4 rounded-lg py-2 border-purple-500">
            Purchase
          </button>

          <div className="border-b border-gray-500/50 mt-10"></div>
          <div className="flex items-center justify-center mt-4">
            <Check color="white" size={15} />
            <p className="text-white text-xs ml-2">100 GB storage</p>
          </div>
          <div className="flex items-center justify-center mt-2">
            <Check color="white" size={15} />
            <p className="text-white text-xs ml-2">Option to add members</p>
          </div>
          <div className="flex items-center justify-center mt-2">
            <Check color="white" size={15} />
            <p className="text-white text-xs ml-2">Extra member benefits</p>
          </div>
        </div>
        {/* Card 2 */}
        <div className="flex flex-col w-50 h-90 border-8 border-purple-500/70 rounded-xl">
          <p className="text-white uppercase text-center mt-5">Standard</p>
          <p className="text-center text-4xl font-serif text-white mt-5">
            200GB
          </p>
          <p className="text-white text-center text-sm mt-2">990 DA/month</p>
          <button className="text-white border hover:bg-purple-500/50 transition-all hover:text-white w-30 mx-auto mt-4 rounded-lg py-2 border-purple-500">
            Purchase
          </button>

          <div className="border-b border-gray-500/50 mt-10"></div>
          <div className="flex items-center justify-center mt-4">
            <Check color="white" size={15} />
            <p className="text-white text-xs ml-2">200 GB storage</p>
          </div>
          <div className="flex items-center justify-center mt-2">
            <Check color="white" size={15} />
            <p className="text-white text-xs ml-2">Option to add members</p>
          </div>
          <div className="flex items-center justify-center mt-2">
            <Check color="white" size={15} />
            <p className="text-white text-xs ml-2">Extra member benefits</p>
          </div>
        </div>
        {/* Card 3 */}
        <div className="flex flex-col w-50 h-90 border-8 border-slate-500/50 rounded-xl">
          <p className="text-white uppercase text-center mt-5">premium</p>
          <p className="text-center text-4xl font-serif text-white mt-5">
            2 TB
          </p>
          <p className="text-white text-center text-sm mt-2">2990 DA/month</p>
          <button className="text-white border hover:bg-purple-500/50 transition-all hover:text-white w-30 mx-auto mt-4 rounded-lg py-2 border-purple-500">
            Purchase
          </button>

          <div className="border-b border-gray-500/50 mt-10"></div>
          <div className="flex items-center justify-center mt-4">
            <Check color="white" size={15} />
            <p className="text-white text-xs ml-2">2 TB storage</p>
          </div>
          <div className="flex items-center justify-center mt-2">
            <Check color="white" size={15} />
            <p className="text-white text-xs ml-2">Option to add members</p>
          </div>
          <div className="flex items-center justify-center mt-2">
            <Check color="white" size={15} />
            <p className="text-white text-xs ml-2">Extra member benefits</p>
          </div>
        </div>
      </div>
    </div>
  );
}
