'use client';

import { getAllProductsRequest } from '@/src/services/products';
import ProductGrid from './ProductGrid';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function ProductsSection() {
    const {
        data: products,
        isLoading,
        error,
        refetch,
    } = useQuery({
        queryFn: getAllProductsRequest,
        queryKey: ['products'],
    });
    
    const [visiveis, setVisiveis] = useState(6);
    const produtosVisiveis= products?.slice(0, visiveis);
    const hasMore = products ? visiveis < products.length : false;

    return (
        <div className="container py-4">
            <ProductGrid products={produtosVisiveis} isLoading={isLoading} error={error} refetch={refetch} onLoadMore={() => setVisiveis(prev => prev + 6)} hasMore={hasMore}/>
        </div>
    );
}
