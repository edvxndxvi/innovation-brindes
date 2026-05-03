'use client';

import { getAllProductsRequest, searchProductsRequest } from '@/src/services/products';
import ProductGrid from './ProductGrid';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import SearchInput from '@/src/components/ui/SearchInput';
import { useDebounce } from '../../../hooks/useDebounce';
import SelectOrder from '@/src/components/ui/SelectOrder';
import { Ordenacao } from '@/src/types/interfaces';
import { ordenarProdutos } from '@/src/lib/utils';

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

    const [ordenar, setOrdenar] = useState<Ordenacao>('');

    const [visiveis, setVisiveis] = useState(6);
    const produtosVisiveis = ordenarProdutos(products ?? [], ordenar)?.slice(0, visiveis);

    const hasMore = produtosVisiveis?.length < (products?.length ?? 0);

    return (
        <div className="container py-4 flex flex-col gap-4">
            <div className='flex flex-col sm:flex-row justify-between'>
                <SearchInput value={busca} onChange={(e) => setBusca(e.target.value)} />
                <SelectOrder value={ordenar} onChange={setOrdenar} />
            </div>
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
