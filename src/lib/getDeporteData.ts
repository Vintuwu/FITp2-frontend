import { query } from "./strapi";

const STRAPI_HOST = process.env.NEXT_PUBLIC_STRAPI_HOST

export function getDeporteInfo(){
    return query('deportes?fields[0]=name&populate[image][fields][0]=url').then(
        res => {
            return res.data.map((deporte: any) => {
                const {name, image: rawImage} = deporte
                const image = `${STRAPI_HOST}/${rawImage.url}`
                return {name, image}
            })
        }
    )
}