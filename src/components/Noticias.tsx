import { getNoticiaData } from "@/lib/getNoticiaData";
import CardNew from "./Card/CardNews";

export const MostrarNoticias = async () => {
  const noticias = await getNoticiaData();
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {noticias.map((noticia: any, index: number) => (
          <CardNew key={index} noticia={noticia}/>
        ))}
      </div>
    </>
  );
};
