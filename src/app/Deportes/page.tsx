import { getDeporteInfo } from "@/lib/getDeporteData";
import Link from "next/link";

export default async function Deporte(){
 const deportes = await getDeporteInfo();
 console.log(deportes);
  return (
    <div className="columns-3">
      {deportes.map((deporte: any) => (
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold text-black">{deporte.name}</h1>
          <img src={deporte.image} alt="Una imagen de un deporte" className="w-1/3 h-1/3"/>
          <button className="px-3 py-2 bg-blue-600 font-bold rounded-lg hover:bg-blue-700 transition-all duration-200 mt-6">
            <Link href={`/Deportes/${deporte.name}`}>Ir a las noticias de {deporte.name}</Link>
          </button>
        </div>
      ))}
    </div>
  )
}