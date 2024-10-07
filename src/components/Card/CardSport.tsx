interface CardProps {
  title?: string;
  imageUrl?: string;
  link?: string;
}

export const CardSport = ({ title, imageUrl, link = "#" }: CardProps) => {
  return (
    <div className="px-4 py-4 w-full border-2 border-gray-200 rounded-3xl">
      <img
        src={`http://localhost:1337${imageUrl}`}
        alt="Image"
        className="mb-4 rounded-xl w-full h-2/3 object-cover"
      />

      <h2 className="font-semibold text-gray-900 text-lg md:text-3xl mb-4 text-center">
        {title}
      </h2>
      <div>
        <a
          href={link}
          className="text-center py-4 block font-semibold text-white text-lg rounded-xl hover:bg-blue-800 bg-blue-400 transition ease-in-out duration-300"
        >
          Ver noticias
        </a>
      </div>
    </div>
  );
};
