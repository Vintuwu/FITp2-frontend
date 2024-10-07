import { Index } from "@/components/Index";
import { getHomeInfo } from "@/lib/getHomeInfo";
import { useState } from "react";

export default function Home() {
  return (
    <div className="">
      <Index/>
      <section className="bg-white py-16 md:mt-10">
        <div className="container max-w-screen-xl mx-auto px-4">
          <p className="font-light text-gray-500 text-lg md:text-xl text-center uppercase mb-6">
            Deportes
          </p>

          <h1 className="font-semibold text-gray-900 text-xl md:text-4xl text-center leading-normal mb-10">
            Todos los deportes que <br /> se juegan en la ciudad
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 py-6 flex justify-center bg-blue-200 bg-opacity-30 text-blue-700 rounded-xl">
                  <i data-feather="globe"></i>
                </div>
              </div>

              <h4 className="font-semibold text-lg md:text-2xl text-gray-900 mb-6">
                Transparent
              </h4>

              <p className="font-light text-gray-500 text-md md:text-xl mb-6">
                Donations and distributions can be seen transparently
              </p>

              <div className="flex justify-center">
                <a
                  href="#"
                  className="flex items-center gap-5 px-6 py-4 font-semibold text-info text-lg rounded-xl hover:bg-info hover:text-white transition ease-linear duration-500"
                >
                  Learn more
                  <i data-feather="chevron-right"></i>
                </a>
              </div>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 py-6 flex justify-center bg-blue-200 bg-opacity-30 text-blue-700 rounded-xl">
                  <i data-feather="arrow-up-right"></i>
                </div>
              </div>

              <h4 className="font-semibold text-lg md:text-2xl text-gray-900 mb-6">
                Quick Fundraise
              </h4>

              <p className="font-light text-gray-500 text-md md:text-xl mb-6">
                The simple and quickest way to make a donation
              </p>

              <div className="flex justify-center">
                <a
                  href="#"
                  className="flex items-center gap-5 px-6 py-4 font-semibold text-info text-lg rounded-xl hover:bg-info hover:text-white transition ease-linear duration-500"
                >
                  Learn more
                  <i data-feather="chevron-right"></i>
                </a>
              </div>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 py-6 flex justify-center bg-blue-200 bg-opacity-30 text-blue-700 rounded-xl">
                  <i data-feather="clock"></i>
                </div>
              </div>

              <h4 className="font-semibold text-lg md:text-2xl text-gray-900 mb-6">
                Real Time
              </h4>

              <p className="font-light text-gray-500 text-md md:text-xl mb-6">
                Reports related to donations and distribution are updated
                directly
              </p>

              <div className="flex justify-center">
                <a
                  href="#"
                  className="flex items-center gap-5 px-6 py-4 font-semibold text-info text-lg rounded-xl hover:bg-info hover:text-white transition ease-linear duration-500"
                >
                  Learn more
                  <i data-feather="chevron-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <h1 className="font-semibold text-gray-900 text-xl md:text-4xl text-center mb-16">
            Latest to donate
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="px-6 py-6 w-full border-2 border-gray-200 rounded-3xl">
              <img
                src="assets/image/donation-1.png"
                alt="Image"
                className="mb-6 hover:opacity-75 transition ease-in-out duration-500"
              />

              <h4 className="font-semibold text-gray-900 text-lg md:text-2xl mb-6">
                Help flood victims in <br /> Indonesia
              </h4>

              <p className="font-light text-gray-400 text-sm md:text-md lg:text-lg mb-10">
                Help flood victims in Indonesia by <br /> donating sincerely,
                regardless of the...
              </p>

              <div className="flex items-center justify-between mb-8">
                <h6 className="font-light text-gray-400 text-sm md:text-lg">
                  Goals :{" "}
                  <span className="font-semibold text-gray-900 text-md md:text-lg">
                    $25000
                  </span>
                </h6>

                <h6 className="font-light text-gray-400 text-sm md:text-lg">
                  Raised :{" "}
                  <span className="font-semibold text-gray-900 text-md md:text-lg">
                    $21000
                  </span>
                </h6>
              </div>

              <div className="hidden md:block lg:flex items-center justify-between mb-8">
                <div>
                  <div className="w-72 h-2 bg-info opacity-10 rounded-lg absolute"></div>
                  <div className="w-56 h-2 bg-info rounded-lg relative"></div>
                </div>
                <p className="font-light text-gray-900 text-md">84%</p>
              </div>

              <button className="w-full py-4 bg-info font-semibold text-white text-lg rounded-xl hover:bg-blue-800 transition ease-in-out duration-500">
                Donate
              </button>
            </div>

            <div className="px-6 py-6 w-full border-2 border-gray-200 rounded-3xl">
              <img
                src="assets/image/donation-2.png"
                alt="Image"
                className="mb-6 hover:opacity-75 transition ease-in-out duration-500"
              />

              <h4 className="font-semibold text-gray-900 text-lg md:text-2xl mb-6">
                Donation for COVID-19 in <br /> Indonesia
              </h4>

              <p className="font-light text-gray-400 text-sm md:text-md lg:text-lg mb-10">
                Donation for COVID-19 in Indonesia by <br /> donating sincerely,
                regardless of the...
              </p>

              <div className="flex items-center justify-between mb-8">
                <h6 className="font-light text-gray-400 text-sm md:text-lg">
                  Goals :{" "}
                  <span className="font-semibold text-gray-900 text-md md:text-lg">
                    $24000
                  </span>
                </h6>

                <h6 className="font-light text-gray-400 text-sm md:text-lg">
                  Raised :{" "}
                  <span className="font-semibold text-gray-900 text-md md:text-lg">
                    $19000
                  </span>
                </h6>
              </div>

              <div className="hidden md:block lg:flex items-center justify-between mb-8">
                <div>
                  <div className="w-72 h-2 bg-info opacity-10 rounded-lg absolute"></div>
                  <div className="w-52 h-2 bg-info rounded-lg relative"></div>
                </div>
                <p className="font-light text-gray-900 text-md">80%</p>
              </div>

              <button className="w-full py-4 bg-info font-semibold text-white text-lg rounded-xl hover:bg-blue-800 transition ease-in-out duration-500">
                Donate
              </button>
            </div>

            {/* Repite la estructura para los demás elementos */}
          </div>

          <div className="flex items-center justify-center">
            <button className="px-7 py-5 font-semibold bg-gray-100 text-gray-900 rounded-2xl hover:bg-gray-300 hover:text-gray-600 transition ease-in-out duration-500">
              More to donate
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
