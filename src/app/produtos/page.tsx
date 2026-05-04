'use client';

import Header from '@/src/components/section/Header';
import ProductsSection from './_components/ProductsSection';
import Modal from '@/src/components/ui/Modal';
import { useModalStore } from '@/src/store/modalStore';

export default function Produtos() {
    const { selectedProduct } = useModalStore();
    return (
        <div className="w-full h-screen">
            <Header />
            <ProductsSection />
            {selectedProduct && <Modal />}
        </div>
    );
}
