import { getHomeInfo } from "@/lib/getHomeInfo";
import Link from "next/link";

export const Navbar = async () => {
  const { altTextLogo, logoImage } = await getHomeInfo()

  return (
        <nav className="flex-wrap lg:flex items-center">
          <div className="flex items-center mb-10 lg:mb-0">
            <Link href={'/'}>
              <img src={logoImage} alt={altTextLogo} className="max-h-16 max-w-16"/>
            </Link>
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
  );
};
