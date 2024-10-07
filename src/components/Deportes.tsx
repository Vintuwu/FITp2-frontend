"use client";
// src/components/Deportes.tsx
import { useEffect, useState } from "react";
import { getDeportesInfo } from "../lib/get-deportes-info";
import { CardSport } from "./Card/CardSport";

interface Deporte {
  name: string;
  image: {
    url: string;
  };
}

const Deportes: React.FC = () => {
  const [deportesInfo, setDeportesInfo] = useState<Deporte[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDeportesInfo();
      if (data && Array.isArray(data)) {
        setDeportesInfo(data);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="container max-w-screen-xl mx-auto px-4">
      <h1 className="font-semibold text-gray-900 text-xl md:text-4xl text-center mb-16">
        Deportes del municipio
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 row-auto">
        {deportesInfo.length > 0 ? (
          deportesInfo.map((deporte, index) => (
            <CardSport
              key={index}
              title={deporte.name}
              imageUrl={deporte.image.url}
            />
          ))
        ) : (
          <p>Cargando datos...</p>
        )}
      </div>
    </div>
  );
};

export default Deportes;
