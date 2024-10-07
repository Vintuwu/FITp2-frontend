import { query } from "./strapi";

export function getNoticiasInfo(deporte: string) {
  return query(`noticias?filters[deporte][name][$eq]=${deporte}&populate=*`)
    .then(res => {
      return res.data;
    })
    .catch(error => {
      console.error("Error al obtener las noticias:", error);
      return [];
    });
}
