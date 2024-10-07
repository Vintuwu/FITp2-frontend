import { getDeporteInfo } from "@/lib/getDeporteData";
import { notFound } from "next/navigation";


export async function generateStaticParams(){
    const data = await getDeporteInfo()
    return data.map((deporte: any) => ({
        nombreDeporte: deporte.name
    }))
}

export default async function Deportes({ params }: { params: {nombreDeporte: string}}){
    const {nombreDeporte} = params

    const deportes = await getDeporteInfo()

    const deporteValido = deportes.find((deporte: any) => deporte.name == nombreDeporte);

    if (!deporteValido){
        notFound()
    }

    return (
        <div className="text-black font-bold">
            {deporteValido.name}
            <img src={deporteValido.image} className="w-1/3 h-1/3"/>
        </div>
    )
}