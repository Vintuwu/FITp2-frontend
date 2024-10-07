import { query } from "./strapi";

const STRAPI_HOST = process.env.NEXT_PUBLIC_STRAPI_HOST;

export function getNoticiaData() {
    return query('noticias?fields[0]=titulo&fields[1]=contenido&populate[preview][fields][0]=url&populate[deporte][fields][0]=name').then(
        res => {
            return res.data.map((noticia: any) => {
                const { titulo, contenido, preview, deporte } = noticia;
                const image = `${STRAPI_HOST}/${preview.url}`;
                const nombreDeporte = deporte ? deporte.name : '';

                return { titulo, contenido, image, deporte: nombreDeporte };
            });
        }
    );
}
