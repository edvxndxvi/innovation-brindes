import { useRef, useEffect } from 'react';
import { useModalStore } from '@/src/store/modalStore';
import ProductCard from '@/src/app/produtos/_components/ProductCard';
import { useFavoritesStore } from '@/src/store/favoriteStore';

export default function Modal() {
    const { selectedProduct, closeModal } = useModalStore();
    const { isFavorite, toggleFavorite } = useFavoritesStore(); 
    const dialogRef = useRef<HTMLDialogElement>(null);

    
    useEffect(() => {
        const dialog = dialogRef.current;

        if (!dialog) return;

        if (selectedProduct) {
            dialog.showModal();
            document.body.style.overflow = 'hidden';
        } else {
            if (dialog.open) dialog.close();
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [selectedProduct]);

    if (!selectedProduct) return null;

    return (
        <dialog ref={dialogRef} onClose={closeModal} className="backdrop:bg-black/50 rounded-sm m-auto" aria-labelledby="modal-title">
            <div className="bg-white p-6 w-full max-w-md">
                <h2 id="modal-title" className="sr-only">{selectedProduct.nome}</h2>
                <ProductCard
                        codigo={selectedProduct.codigo}
                        nome={selectedProduct.nome}
                        imagem={selectedProduct.imagem}
                        preco={selectedProduct.preco}
                        descricao={selectedProduct.descricao}
                        isFavorite={isFavorite(selectedProduct.codigo)}
                        onFavorite={() => toggleFavorite(selectedProduct)}
                    />

                <button onClick={closeModal} className="mt-4 cursor-pointer bg-lime-500 text-white px-4 py-2 rounded hover:opacity-75 w-full uppercase font-bold">
                    Fechar
                </button>
            </div>
        </dialog>
    );
}
