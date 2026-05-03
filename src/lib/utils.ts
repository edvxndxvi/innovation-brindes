import { Product } from "../types/interfaces";

export function normalizeProducts(products: Product[]): Product[] {
    return products.map((item) => ({
        ...item,
        codigo: +item.codigo,
        referencia: +item.referencia,
        codigo_categoria: +item.codigo_categoria,
        preco: Number(Number(item.preco).toFixed(2)),
        imagem: item.imagem.replace(/\\\//g, '/'),
    }));
}