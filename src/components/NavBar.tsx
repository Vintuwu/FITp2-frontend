import { getHomeInfo } from "@/lib/getHomeInfo";
import Link from "next/link";

export const NavBar = async () => {
  const { altTextLogo, logoImage } = await getHomeInfo()

  return (
        <nav className="flex-wrap lg:flex items-center border-b-2 border-b-blue-600 pb-4">
          <div className="flex items-center mb-10 lg:mb-0">
            <Link href={'/'}>
              <img src={logoImage} alt={altTextLogo} className="max-h-20 max-w-20"/>
            </Link>
          </div>

          <ul
            className={`lg:flex text-lg flex-col font-bold lg:flex-row lg:items-center lg:ml-12 lg:space-x-8 xl:space-x-14`}
          >
            <li className="font-semibold text-gray-900 hover:text-blue-600 transition ease-in-out duration-100 mb-5 lg:mb-0">
              <Link href={'/Deportes'}>Deportes</Link>
            </li>
            <li className="font-semibold text-gray-900 hover:text-blue-600 transition ease-in-out duration-100 mb-5 lg:mb-0">
              <Link href={'/Noticias'}>Noticias</Link>
            </li>
          </ul>
        </nav>
  );
};
