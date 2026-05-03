'use client';

import { getAllProductsRequest, searchProductsRequest } from '@/src/services/products';
import ProductGrid from './ProductGrid';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import SearchInput from '@/src/components/ui/SearchInput';
import { useDebounce } from '../../../hooks/useDebounce';

export default function ProductsSection() {
    const [busca, setBusca] = useState('');
    const buscaDebounced = useDebounce(busca, 400);

    const {
        data: products,
        isLoading,
        error,
        refetch,
    } = useQuery({
        queryFn: () => buscaDebounced ? searchProductsRequest(buscaDebounced) : getAllProductsRequest(),
        queryKey: ['products', buscaDebounced],
    });

    const [visiveis, setVisiveis] = useState(6);
    const produtosVisiveis = products?.slice(0, visiveis);
    const hasMore = products ? visiveis < products.length : false;

    return (
        <div className="container py-4 flex flex-col gap-4">
            <SearchInput value={busca} onChange={(e) => setBusca(e.target.value)} />
            <ProductGrid
                products={produtosVisiveis}
                isLoading={isLoading}
                error={error}
                refetch={refetch}
                onLoadMore={() => setVisiveis((prev) => prev + 6)}
                hasMore={hasMore}
            />
        </div>
    );
}
