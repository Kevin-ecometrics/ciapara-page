"use client";

import Carousel from "./Carousel";

export default function Content() {
  return (
    <section className="bg-[#F6F2EC] py-20 md:py-32">
      <div className="px-6 lg:px-20">
        <div className="max-w-3xl">
          <h2 className="text-4xl uppercase mb-6 indent-12 md:indent-32">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h2>

          <p className="text-lg max-w-xl text-[#1A1916]/70 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="flex flex-row gap-4 md:gap-6 mt-16 max-w-7xl mb-20">
          <div className="w-2/3 aspect-4/3 bg-amber-700 rounded-2xl" />
          <div className="w-1/3 aspect-4/3 bg-emerald-800 rounded-2xl self-start" />
        </div>

        <div className="max-w-5xl">
          <h2 className="text-4xl uppercase mb-6 indent-12 md:indent-32">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </h2>

          <p className="text-lg max-w-xl text-[#1A1916]/70 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="flex justify-end mt-16 mb-20">
          <div className="w-full md:w-2/3 aspect-video bg-indigo-900 rounded-2xl" />
        </div>

        <div className="max-w-3xl">
          <h2 className="text-4xl uppercase mb-6 indent-12 md:indent-32">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h2>

          <p className="text-lg max-w-xl text-[#1A1916]/70 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>

      <div className="mt-20">
        <Carousel />
      </div>
    </section>
  );
}
