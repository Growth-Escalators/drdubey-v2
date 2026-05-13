import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Certificate = (props: Props) => {
  return (
    <div>
      <div className="w-[85%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div data-aos="fade-right" className="relative ml-4 my-8 md:my-44">
            <Image
              width={1200}
              height={900}
              className="w-full rounded-md"
              src="/assets/images/certi2.jpeg"
              alt="Image Description"
            />
            <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 w-full h-full rounded-md mt-4 -mb-4 mr-4 -ml-4 lg:mt-6 lg:-mb-6 lg:mr-6 lg:-ml-6 dark:from-slate-800 dark:via-slate-900/0 dark:to-slate-900/0"></div>
          </div>

          <div data-aos="fade-left">
            <h2 className="block text-2xl font-bold text-gray-800 sm:text-3xl lg:text-5xl lg:leading-tight dark:text-white">
              Dr. Dubay got awarded for
              <span className="text-primary"> Most Trusted</span> Joint
              Replacement Surgeon of the Year
            </h2>
            <p className="mt-3 text-xl md:text-2xl text-gray-800 dark:text-gray-400">
              He has been awarded for excellence in Joint Replacement surgery by
              the Health Minister of Rajasthan for the last 3 consecutive years.
              He has recently been felicitated by the Honourable central Health
              Minister and Social and Family Welfare Minister as the most
              trusted Joint Replacement Surgeon of North India.
            </p>

            <div className="mt-7 grid gap-3 w-full sm:inline-flex">
              {/* City Dropdown */}

              <div className="">
                <Link
                  className="p-2 relative inline-flex justify-center items-center gap-x-3 text-center bg-primary hover:bg-blue-700 border border-primary text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
                  href={"/booking/jaipur"}
                >
                  Book an appoinment
                </Link>
              </div>

              <Link
                href={"/contact"}
                className="inline-flex justify-center items-center gap-x-3.5 text-sm lg:text-base text-center border hover:border-gray-300 shadow-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:border-gray-800 dark:hover:border-gray-600 dark:shadow-slate-700/[.7] dark:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-[85%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div data-aos="fade-left">
            <h2 className="block text-2xl font-bold text-gray-800 sm:text-3xl lg:text-5xl lg:leading-tight dark:text-white">
              Recently invited as a
              <span className="text-primary">
                {" "}
                senior consultant in Spain (Madrid){" "}
              </span>
              for AO recon Complex Arthroplasty course
            </h2>
            <p className="mt-3 text-xl md:text-2xl text-gray-800 dark:text-gray-400">
              His recent invitation to serve as a senior consultant for the AO
              Recon Complex Arthroplasty course in Madrid, Spain, underscores
              his standing in the global orthopaedic community. This prestigious
              appointment highlights Dr. Dubey advanced skills and knowledge in
              joint replacement surgery, particularly in challenging cases.
            </p>

            <div className="mt-7 grid gap-3 w-full sm:inline-flex">
              <div className="">
                <Link
                  className="p-2 relative inline-flex justify-center items-center gap-x-3 text-center bg-primary hover:bg-blue-700 border border-primary text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
                  href={"/booking/jaipur"}
                >
                  Book an appoinment
                </Link>
              </div>

              <Link
                href={"/contact"}
                className="inline-flex justify-center items-center gap-x-3.5 text-sm lg:text-base text-center border hover:border-gray-300 shadow-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:border-gray-800 dark:hover:border-gray-600 dark:shadow-slate-700/[.7] dark:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div data-aos="fade-right" className="relative ml-4 my-8 md:my-44">
            <Image
              width={1200}
              height={900}
              className="w-full rounded-md"
              src="/assets/images/certi1.jpg"
              alt="Image Description"
            />
            <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 w-full h-full rounded-md mt-4 -mb-4 mr-4 -ml-4 lg:mt-6 lg:-mb-6 lg:mr-6 lg:-ml-6 dark:from-slate-800 dark:via-slate-900/0 dark:to-slate-900/0"></div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Certificate;
