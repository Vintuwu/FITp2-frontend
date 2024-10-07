import { getHomeInfo } from "@/lib/getHomeInfo";

export const Index = async () => {
  const { titulo, descripcion, image, altText } = await getHomeInfo();
  console.log(image)
  return (
    <section className="bg-white py-10 md:mb-10">
      <div className="container max-w-screen-xl mx-auto px-4">
        <nav className="flex-wrap lg:flex items-center">
          <div className="flex items-center mb-10 lg:mb-0">
            <img src="assets/image/navbar-logo.png" alt="Logo" />
          </div>

          <ul
            className={`lg:flex flex-col lg:flex-row lg:items-center lg:mx-auto lg:space-x-8 xl:space-x-14`}
          >
            <li className="font-semibold text-gray-900 hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0">
              <a href="#">Home</a>
            </li>
            <li className="font-semibold text-gray-900 hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0">
              <a href="#">Charities</a>
            </li>
            <li className="font-semibold text-gray-900 hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0">
              <a href="#">Membership</a>
            </li>
            <li className="font-semibold text-gray-900 hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0">
              <a href="#">About us</a>
            </li>
          </ul>

          <div
            className={`lg:flex flex-col md:flex-row md:items-center text-center md:space-x-6`}
          >
            <a
              href="#"
              className="px-6 py-4 bg-blue-500 text-white font-semibold text-lg rounded-xl hover:bg-blue-700 transition ease-in-out duration-500 mb-5 md:mb-0"
            >
              Join
            </a>

            <a
              href="#"
              className="px-6 py-4 border-2 border-blue-500 text-blue-500 font-semibold text-lg rounded-xl hover:bg-blue-700 hover:text-white transition ease-linear duration-500"
            >
              Become a member
            </a>
          </div>
        </nav>

        <div className="flex flex-col lg:flex-row justify-between space-x-20">
          <div className="text-center lg:text-left mt-40">
            <h1 className="font-semibold text-gray-900 text-3xl md:text-6xl leading-normal mb-6">
              {titulo}
            </h1>

            <p className="font-light text-gray-400 text-md md:text-lg leading-normal mb-12">
              {descripcion}
            </p>

            <button className="px-6 py-4 bg-info font-semibold text-white text-lg rounded-xl hover:bg-blue-700 transition ease-in-out duration-500">
              Get started
            </button>
          </div>

          <div className="mt-24">
            <img src={image} alt={altText} />
          </div>
        </div>
      </div>
    </section>
  );
};
