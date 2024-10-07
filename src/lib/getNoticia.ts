import { query } from "./strapi";

const STRAPI_HOST = process.env.NEXT_PUBLIC_STRAPI_HOST

export function getNoticia(tituloNoticia: string){
    const tituloNoticiaFormulada = tituloNoticia.replace(' ', '%20')
    return query(`noticias?filters[titulo][$eq]=${tituloNoticiaFormulada}&populate[preview][fields][0]=url&populate[preview][fields][1]=alternativeText`).then(
        res => {
            const {titulo, contenido, preview: rawImage} = res.data[0]
            const image = `${STRAPI_HOST}/${rawImage.url}`
            const imageAltText = rawImage.alternativeText
            return {titulo, contenido, image, imageAltText}
        }
    )
}