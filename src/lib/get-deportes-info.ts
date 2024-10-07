import { query } from "./strapi";

export function getDeportesInfo() {
  return query('deportes?populate=image').then(
    res => {
      return res.data;
    })
}
