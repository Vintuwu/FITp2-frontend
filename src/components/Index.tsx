import { getHomeInfo } from "@/lib/getHomeInfo";
import Link from "next/link";

export const Index = async () => {
  const { titulo, descripcion, image, altText, altTextLogo, logoImage } = await getHomeInfo();
  console.log(image)
  return (
    <section className="bg-white py-10 md:mb-10">
      <div className="container max-w-screen-xl mx-auto px-4">
        <nav className="flex-wrap lg:flex items-center">
          <div className="flex items-center mb-10 lg:mb-0">
            <img src={logoImage} alt={altTextLogo} className="max-h-16 max-w-16" />
          </div>

          <ul
            className={`lg:flex flex-col lg:flex-row lg:items-center lg:ml-12 lg:space-x-8 xl:space-x-14`}
          >
            <li className="font-semibold text-gray-900 hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0">
              <Link href={'/Deportes'}>Deportes</Link>
            </li>
            <li className="font-semibold text-gray-900 hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0">
              <Link href={'/Noticias'}>Noticias</Link>
            </li>
          </ul>
        </nav>

        <div className="flex flex-col lg:flex-row justify-between space-x-20">
          <div className="text-center lg:text-left mt-40">
            <h1 className="font-semibold text-gray-900 text-3xl md:text-6xl leading-normal mb-6">
              {titulo}
            </h1>

            <p className="font-light text-gray-400 text-md md:text-lg leading-normal mb-12">
              {descripcion}
            </p>
          </div>

          <div className="mt-24">
            <img src={image} alt={altText} />
          </div>
        </div>
      </div>
    </section>
  );
};
