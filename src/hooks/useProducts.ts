'use client';

import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { getAllProductsRequest, searchProductsRequest } from '../services/products';

export function useProducts(buscaDebounced: string) {
    const router = useRouter();

    const query = useQuery({
        queryKey: ['products', buscaDebounced],
        queryFn: async () => {
            try {
                return buscaDebounced ? await searchProductsRequest(buscaDebounced) : await getAllProductsRequest();
            } catch (error: unknown) {
                if (error instanceof Error && error.message.includes('unexpected response')) {
                    router.push('/login');
                    return [];
                }
                throw error;
            }
        },
    });

    return query;
}
