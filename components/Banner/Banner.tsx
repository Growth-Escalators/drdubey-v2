import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="w-[85%] mx-auto py-10">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Discover Cutting-Edge Solutions
          </h2>
          <p className="text-lg md:text-xl text-gray-700">
            Experience Less Pain, Faster Recovery, and the Latest Advancements
            in Joint Care for a Renewed and Active Lifestyle.
          </p>
          <button className="mt-6 px-6 py-3 bg-primary text-white rounded-md shadow-md hover:bg-primary-dark transition">
            Learn More
          </button>
        </div>
        <div className="lg:w-1/2">
          <Image
            height={600}
            width={600}
            className="rounded-md shadow-lg"
            src="/assets/images/img3.jpg"
            alt="Cutting-Edge Solutions"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
