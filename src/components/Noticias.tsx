"use client";
import { useEffect, useState } from "react";
import { getNoticiasInfo } from "../lib/get-noticias-info";
import { CardNews } from "./Card/CardNews";

interface Noticia {
  titulo: string;
  contenido: string;
  preview: {
    url: string;
  };
}

const Noticias: React.FC = () => {
  const [noticiasInfo, setNoticiasInfo] = useState<Noticia[]>([]);
  const [deporte] = useState<string>("Basquet"); // Valor por defecto para deporte

  useEffect(() => {
    const fetchData = async () => {
      const data = await getNoticiasInfo(deporte);
      if (data && Array.isArray(data)) {
        setNoticiasInfo(data);
      }
    };

    fetchData();
  }, [deporte]); // Dependencia: se ejecuta cuando cambie 'deporte'

  return (
    <div className="container max-w-screen-xl mx-auto px-4">
      <h1 className="font-semibold text-gray-900 text-xl md:text-4xl text-center mb-16">
        Noticias del municipio
      </h1>

      <div className=" gap-6 mb-8 row-auto">
        {noticiasInfo.length > 0 ? (
          noticiasInfo.map((noticia, index) => (
            <CardNews
              key={index}
              title={noticia.titulo}
              imageUrl={noticia.preview?.url || "#"} 
            />
          ))
        ) : (
          <p>Cargando datos...</p>
        )}
      </div>
    </div>
  );
};

export default Noticias;
