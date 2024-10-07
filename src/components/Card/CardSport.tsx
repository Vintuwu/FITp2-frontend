import Link from "next/link";

interface CardProps {
  name?: string;
  imageUrl?: string;
}

export const CardSport = ({ name, imageUrl }: CardProps) => {
  return (
    <div className="px-4 py-4 w-full border-2 border-gray-200 rounded-3xl">
      <img
        src={`http://localhost:1337${imageUrl}`}
        alt={`Imagen deporte ${name}`}
        className="mb-4 rounded-xl w-full h-2/3 object-cover"
      />

      <h2 className="font-semibold text-gray-900 text-lg md:text-3xl mb-4 text-center">
        {name}
      </h2>

      <button className="px-3 py-2 text-lg bg-blue-600 w-full font-bold rounded-lg hover:bg-blue-800 transition-all duration-200">
        <Link href={`/Deportes/${name}`}>
          Ver las noticias de {name}
        </Link>
      </button>
    </div>
  );
};
