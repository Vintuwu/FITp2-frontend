import { Navbar } from "@/components/Navbar";
import { getNoticia } from "@/lib/getNoticia";
import Markdown from "react-markdown";
import ReactMarkdown from "react-markdown";

export default async function UnaNoticia({ params }: {params: {nombreNoticia: string}}){
    const { nombreNoticia } = params
    
    const noticia = await getNoticia(nombreNoticia)
    console.log(noticia)
    return (
        <div className="container max-w-screen-xl mx-auto px-4 py-1">
            <Navbar/>
            {noticia.titulo}
            <img src={noticia.image} alt={noticia.imageAltText} />
            <Markdown>
                {noticia.contenido}
            </Markdown>
        </div>
    )
}