import { query } from "./strapi";

const STRAPI_HOST = process.env.NEXT_PUBLIC_STRAPI_HOST

export function getHomeInfo(){
    return query("home?populate=cover").then(
        res => {
            const {titulo, descripcion, cover} = res.data
            const altText = cover.alternativeText
            const image = `${STRAPI_HOST}/${cover.url}`
            
            return {titulo, descripcion, image, altText}
        }
    )
}