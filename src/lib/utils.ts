import { Product } from '../types/interfaces';

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

export function ordenarProdutos(produtos: Product[], ordenar: string): Product[] {
    if (!produtos) return [];
    switch (ordenar) {
        case 'nome_asc':
            return [...produtos].sort((a, b) => a.nome.localeCompare(b.nome));
        case 'nome_desc':
            return [...produtos].sort((a, b) => b.nome.localeCompare(a.nome));
        case 'preco_asc':
            return [...produtos].sort((a, b) => a.preco - b.preco);
        case 'preco_desc':
            return [...produtos].sort((a, b) => b.preco - a.preco);
        default:
            return produtos;
    }
}
