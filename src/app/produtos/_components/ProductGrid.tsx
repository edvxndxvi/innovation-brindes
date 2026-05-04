import { useInView } from 'react-intersection-observer';
import ProductCard from './ProductCard';
import ProductCardSkeleton from './ProductCardSkeleton';
import { Product } from '@/src/types/interfaces';
import { useEffect } from 'react';
import { useFavoritesStore } from '@/src/store/favoriteStore';

interface ProductGridProps {
    products: Product[] | undefined;
    isLoading: boolean;
    error: Error | null;
    refetch: () => void;
    onLoadMore: () => void;
    hasMore: boolean;
}

export default function ProductGrid({ products, isLoading, error, refetch, onLoadMore, hasMore, }: ProductGridProps) {
    const { ref, inView } = useInView();
    const { toggleFavorite, isFavorite } = useFavoritesStore();  
    
    const showEmptyMessage = !isLoading && !error && products?.length === 0;
    const showProducts = !isLoading && !error && products && products.length > 0;

    useEffect(() => {
        if (inView && !isLoading && !error && hasMore) {
            onLoadMore();
        }
    }, [inView, isLoading, error, onLoadMore, hasMore]);

    return (
        <>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-16 list-none w-full">
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
                            isFavorite={isFavorite(product.codigo)}
                            onFavorite={() => toggleFavorite(product)}
                        />
                    ))
                ) : showEmptyMessage ? (
                    <p className='text-center col-span-full'>Nenhum produto encontrado.</p>
                ) : null}

                {/* Error */}

                {error && 
                    <div className='flex flex-col justify-center items-center'>
                        <p className='text-center'>Ocorreu um erro ao carregar os produtos.</p>
                        <button onClick={() => refetch()} className='bg-blue-500 text-white px-4 py-2 rounded mt-4'>Tentar novamente</button>
                    </div>
                }
            </div>

            {hasMore && (
                <div className='my-16'>
                    <div ref={ref} className='flex justify-center gap-2'>
                        <div className='bg-gray-300 h-3 w-3 rounded-full animate-bounce select-none'/>
                        <div className='bg-gray-300 h-3 w-3 rounded-full animate-bounce select-none delay-1000'/>
                        <div className='bg-gray-300 h-3 w-3 rounded-full animate-bounce select-none delay-2000'/>
                    </div>
                </div>
            )}
        </>
    );
}
