'use client';

import ProductGrid from './ProductGrid';
import { useState } from 'react';
import SearchInput from '@/src/components/ui/SearchInput';
import { useDebounce } from '../../../hooks/useDebounce';
import SelectOrder from '@/src/components/ui/SelectOrder';
import { Ordenacao } from '@/src/types/interfaces';
import { ordenarProdutos } from '@/src/lib/utils';
import FavoritesButton from '@/src/components/ui/FavoritesButton';
import { useFavoritesStore } from '@/src/store/favoriteStore';
import { useProducts } from '@/src/hooks/useProducts';

export default function ProductsSection() {
    const [busca, setBusca] = useState('');
    const buscaDebounced = useDebounce(busca, 400);
    const [mostrarFavoritos, setMostrarFavoritos] = useState(false);
    const toggleMostrarFavoritos = () => setMostrarFavoritos((prev) => !prev);
    const { favorites } = useFavoritesStore();

    const {
        data: products,
        isLoading,
        error,
        refetch,
    } = useProducts(buscaDebounced);

    const [ordenar, setOrdenar] = useState<Ordenacao>('');
    const listaAtual = mostrarFavoritos ? favorites : (products ?? []);
    const [visiveis, setVisiveis] = useState(6);
    const produtosVisiveis = ordenarProdutos(listaAtual, ordenar)?.slice(0, visiveis);

    const hasMore = produtosVisiveis?.length < (listaAtual?.length ?? 0);

    return (
        <div className="container py-4 flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <SearchInput value={busca} onChange={(e) => setBusca(e.target.value)} />
                <FavoritesButton onClick={toggleMostrarFavoritos} />
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
