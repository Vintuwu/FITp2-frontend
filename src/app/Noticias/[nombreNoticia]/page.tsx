import { NavBar } from "@/components/NavBar";
import { getNoticia } from "@/lib/getNoticia";
import Link from "next/link";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export default async function UnaNoticia({ params }: {params: {nombreNoticia: string}}) {
    const { nombreNoticia } = params;
    
    const noticia = await getNoticia(nombreNoticia);
    
    return (
        <div className="container max-w-screen-xl mx-auto px-4 py-6">
            <NavBar/>
            <Link href="/Noticias" className="inline-block mb-4 text-lg text-blue-600 hover:text-blue-800">
                &larr; Volver a Noticias
            </Link>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{noticia.titulo}</h1>
            <img 
                src={noticia.image} 
                alt={`Imagen de ${noticia.titulo}`} 
                className="w-2/3 h-2/3 object-cover rounded-lg shadow-md mb-4" 
            />
            <div className="prose prose-lg text-gray-700">
                <BlocksRenderer content={noticia.contenido} />
            </div>
        </div>
    )
}
