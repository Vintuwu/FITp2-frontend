import { query } from "./strapi";

const STRAPI_HOST = process.env.NEXT_PUBLIC_STRAPI_HOST

export function getHomeInfo(){
    return query("home?populate=*").then(
        res => {
            const {titulo, descripcion, cover, logo} = res.data
            const altText = cover.alternativeText
            const image = `${STRAPI_HOST}/${cover.url}`
            const altTextLogo= logo.alternativeText
            const logoImage = `${STRAPI_HOST}/${logo.url}`
            
            return {titulo, descripcion, image, altText, altTextLogo, logoImage}
        }
    )
}