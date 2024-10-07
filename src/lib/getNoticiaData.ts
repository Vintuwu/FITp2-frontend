import { query } from "./strapi";

const STRAPI_HOST = process.env.NEXT_PUBLIC_STRAPI_HOST

export function getNoticiaData(){
    return query('noticias?fields[0]=titulo&fields[1]=contenido&populate[preview][fields][0]=url').then(
        res => {
            return res.data.map((noticia: any) => {
                const { titulo, contenido, preview } = noticia
                const image = `${STRAPI_HOST}/${preview.url}`
                return {titulo, contenido, image}
            })
        }
    )
}