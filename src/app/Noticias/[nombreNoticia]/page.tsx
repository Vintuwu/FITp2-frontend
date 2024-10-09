import { NavBar } from "@/components/NavBar";
import { getNoticia } from "@/lib/getNoticia";
import Link from "next/link";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { getNoticiaData } from "@/lib/getNoticiaData";
import CardNew from "@/components/Card/CardNews";

export default async function UnaNoticia({ params }: {params: {nombreNoticia: string}}) {
    const { nombreNoticia } = params;
    
    const noticia = await getNoticia(nombreNoticia);

    const noticias = await getNoticiaData();

    const noticiasSimilares = noticias.filter((algunaNoticia: any) => algunaNoticia.deporte === noticia.deporte && algunaNoticia.titulo !== noticia.titulo)
    
    return (
        <div className="container max-w-screen-xl mx-auto px-4 py-6">
            <NavBar/>
            <Link href="/Noticias" className="inline-block mb-4 text-lg text-blue-600 hover:text-blue-800">
                &larr; Volver a Noticias
            </Link>
            <div className={`grid ${noticiasSimilares.length>0 ? 'lg:grid-cols-12' : ''}`}>
                <div className={`place-self-center ${noticiasSimilares.length>0?'lg:col-span-9':''}`}>
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">{noticia.titulo}</h1>
                    <div className="flex justify-center">
                        <img 
                            src={noticia.image} 
                            alt={`Imagen de ${noticia.titulo}`} 
                            className="w-2/3 h-2/3 object-cover rounded-lg shadow-md mb-4" 
                        />
                    </div>
                    <div className="[&>h1]:text-3xl [&>h1]:font-bold [&>h2]:text-2xl [&>h2]:font-bold text-gray-700">
                        <BlocksRenderer content={noticia.contenido} />
                    </div>
                </div>
                {noticiasSimilares.length > 0 ? (
                    <div className="lg:col-span-3 ml-6">
                        <h2 className="text-lg font-bold mb-2">Otras noticias de {noticia.deporte}</h2>
                        {noticiasSimilares.map((unaNoticia: any, index: number) => (
                            index <= 3 ? (
                                <div key={index} className="mb-3">
                                    <CardNew noticia={unaNoticia}/>
                                </div>
                            )
                            :
                                null
                        ))}
                    </div>
                )
                :
                    null
                }
            </div>
        </div>
    )
}
