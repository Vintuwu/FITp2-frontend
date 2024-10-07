import { getNoticiaData } from "@/lib/getNoticiaData";
import ReactMarkdown from "react-markdown";

export const MostrarNoticias  = async () => {
  const noticias = await getNoticiaData();
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {noticias.map((noticia: any, index: number) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                  {/* Imagen de la noticia */}
                  <img
                    src={noticia.image}
                    alt={`Preview de ${noticia.titulo}`}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  
                  {/* Título y contenido */}
                  <h3 className="text-lg font-bold mb-2">{noticia.titulo}</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {noticia.createdAt && new Date(noticia.createdAt).toLocaleDateString()}
                  </p>

                  {/* Mostrar solo un fragmento del contenido */}
                  <div className="prose mb-4">
                    <ReactMarkdown>
                      {noticia.contenido.slice(0, 35) + '...'}
                    </ReactMarkdown>
                  </div>

                  {/* Botón para leer más */}
                  <a href={`/Noticias/${noticia.titulo}`} className="mt-2 inline-block text-blue-600 hover:text-blue-800 text-sm font-semibold">
                    Leer más...
                  </a>
              </div>
          ))}
      </div>
    </>
  )
}