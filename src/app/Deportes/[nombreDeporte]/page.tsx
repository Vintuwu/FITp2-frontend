import { NavBar } from "@/components/NavBar";
import { getNoticiasInfo } from "@/lib/get-noticias-info";
import { getDeporteInfo } from "@/lib/getDeporteData";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const data = await getDeporteInfo();
  return data.map((deporte: any) => ({
    nombreDeporte: deporte.name,
  }));
}

export default async function Deportes({
  params,
}: {
  params: { nombreDeporte: string };
}) {
  const { nombreDeporte } = params;

  const deportes = await getDeporteInfo();

  const deporteValido = deportes.find(
    (deporte: any) => deporte.name == nombreDeporte
  );

  if (!deporteValido) {
    notFound();
  }

  const noticiasDeporte = await getNoticiasInfo(deporteValido.name);

  return (
    
    <div className="container max-w-screen-xl mx-auto px-4 text-gray-800 py-4">
      <NavBar/>
      {/* Información del Deporte */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{deporteValido.name}</h1>
        <img
          src={deporteValido.image}
          className="w-1/2 h-auto mx-auto rounded-lg shadow-md"
          alt={`${deporteValido.name} image`}
        />
      </div>

      {/* Lista de Noticias */}
      <div className="container max-w-screen-lg mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-semibold text-center mb-8">
          Noticias de {deporteValido.name}
        </h2>

        {/* Grid de noticias */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {noticiasDeporte.length > 0 ? (
            noticiasDeporte.map((noticia: any, index: number) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              >
                {/* Imagen de la noticia */}
                {noticia.preview && noticia.preview.url && (
                  <img
                    src={`http://localhost:1337${noticia.preview.url}`}
                    alt={`Preview de ${noticia.titulo}`}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                )}

                {/* Título y contenido */}
                <h3 className="text-lg font-bold mb-2">{noticia.titulo}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  {noticia.createdAt && new Date(noticia.createdAt).toLocaleDateString()}
                </p>

                {/* Mostrar solo un fragmento del contenido */}
                <div className="prose mb-4">
                  <BlocksRenderer content={noticia.contenido}/>
                </div>
                {/* Botón para leer más */}
                <a
                  href={`/Noticias/${noticia.titulo}`}
                  className="mt-2 inline-block text-blue-600 hover:text-blue-800 text-sm font-semibold"
                >
                  Leer más...
                </a>
              </div>
            ))
          ) : (
            <p className="col-span-3 text-center text-gray-500">No hay noticias disponibles.</p>
          )}
        </div>
      </div>
    </div>
  );
}
