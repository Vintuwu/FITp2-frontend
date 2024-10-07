import { query } from "./strapi";

export function getMetadataInfo(){
    return query('global').then(
        res => {
            const { siteName, siteDescription } = res.data
            return { siteName, siteDescription }
        }
    )
}