import Header from '@/src/components/section/Header';
import ProductsSection from './_components/ProductsSection';

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Produtos - Innovation Brindes',
  description: 'Explore nossa variedade de produtos.',
}

export default function Produtos() {

    return (
        <main className="w-full h-screen">
            <Header />
            <ProductsSection />
        </main>
    );
}
