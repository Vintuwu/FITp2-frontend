export const Deportes = async () => {
  const deportes = ['futbol'];

  if (deportes.length === 0) return null;
  return (
    <section className="bg-white py-16 md:mt-10">
      <div className="container max-w-screen-xl mx-auto px-4">
        <p className="font-light text-gray-500 text-lg md:text-xl text-center uppercase mb-6">
          Our features
        </p>

        <h1 className="font-semibold text-gray-900 text-xl md:text-4xl text-center leading-normal mb-10">
          We believe we can save <br /> more life with you
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
              Reports related to donations and distribution are updated directly
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
  );
};
