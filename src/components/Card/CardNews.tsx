import Link from "next/link"

export default async function CardNew({noticia}: any) {
    return (
        <div
            className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
          >
            {/* Imagen de la noticia */}
            <img
              src={noticia.image}
              alt={`Preview de ${noticia.titulo}`}
              className="w-full h-48 object-cover rounded-md mb-4"
            />

            {/* Título de la noticia */}
            <h3 className="text-lg font-bold mb-2">{noticia.titulo}</h3>
            <p className="text-sm text-gray-600 mb-4">
              {noticia.createdAt &&
                new Date(noticia.createdAt).toLocaleDateString()}
            </p>

            {/* Enlace al deporte */}
            {noticia.deporte && (
              <Link href={`/Deportes/${noticia.deporte}`} className="float-right">
                <span className="inline-block bg-blue-200 text-blue-800 hover:bg-blue-300 hover:text-blue-900 duration-100 text-md font-semibold rounded-full px-2 py-1">
                  {noticia.deporte}
                </span>
              </Link>
            )}
            {/* Botón para leer más */}
            <a
              href={`/Noticias/${noticia.titulo}`}
              className="mt-2 inline-block text-blue-600 hover:text-blue-800 text-sm font-semibold"
            >
              Leer más...
            </a>
        </div>
    )
}