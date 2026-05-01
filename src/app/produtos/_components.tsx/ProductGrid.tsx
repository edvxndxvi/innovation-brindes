'use client';

import { useQuery } from '@tanstack/react-query';
import ProductCard from './ProductCard';
import { getAllProductsRequest } from '@/src/services/products';
import ProductCardSkeleton from './ProductCardSkeleton';

export default function ProductGrid() {
    const { data: products, isLoading, error, refetch } = useQuery({
        queryFn: getAllProductsRequest,
        queryKey: ['products'],
    });

    const showEmptyMessage = !isLoading && !error && products?.length === 0;
    const showProducts = !isLoading && !error && products && products.length > 0;

    return (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-16 list-none w-full">
            {/* Loading */}
            {isLoading && Array.from({ length: 10 }).map((_, index) => (
                <ProductCardSkeleton key={index} />
            ))}

            {/* If products */}
            {showProducts ? (
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
            ) : showEmptyMessage ? (
                <p className='text-center'>Nenhum produto encontrado.</p>
            ) : null}

            {/* Error */}
            {error && 
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-center'>Ocorreu um erro ao carregar os produtos.</p>
                    <button onClick={() => refetch()} className='bg-blue-500 text-white px-4 py-2 rounded mt-4'>Tentar novamente</button>
                </div>
            }
        </div>
    );
}
