import { getHomeInfo } from "@/lib/getHomeInfo";
import { NavBar } from "./NavBar";

export const Index = async () => {
  const { titulo, descripcion, image, altText } = await getHomeInfo();
  return (
    <section className="bg-white py-4">
      <div className="container max-w-screen-xl mx-auto px-4">
        <NavBar />
        <div className="flex flex-col lg:flex-row justify-between space-x-20">
          <div className="text-center lg:text-left mt-40">
            <h1 className="font-semibold text-gray-900 text-3xl md:text-6xl leading-normal mb-6">
              {titulo}
            </h1>

            <p className="font-light text-gray-700 text-md md:text-lg leading-normal mb-12">
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
