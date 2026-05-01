'use client';

import { getAllProductsRequest } from '@/src/services/products';
import ProductGrid from './ProductGrid';
import { useQuery } from '@tanstack/react-query';

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
    
    return (
        <div className="container py-4">
            <ProductGrid products={products} isLoading={isLoading} error={error} refetch={refetch} />
        </div>
    );
}
