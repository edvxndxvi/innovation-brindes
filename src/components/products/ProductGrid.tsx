'use client';

import { useQuery } from '@tanstack/react-query';
import ProductCard from './ProductCard';
import { getAllProductsRequest } from '@/src/services/products';

export default function ProductGrid() {
    const { data: products, isLoading, error } = useQuery({
        queryFn: getAllProductsRequest,
        queryKey: ['products'],
    });

    return (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-16 list-none w-full">
            {products && products.length > 0 ? (
                products.map((product) => (
                    <ProductCard
                        key={product.codigo}
                        codigo={product.codigo}
                        nome={product.nome}
                        imagem={product.imagem}
                        preco={product.preco}
                        descricao={product.descricao}
                    />
                ))
            ) : (
                <p className='text-center'>Nenhum produto encontrado.</p>
            )}
        </div>
    );
}
