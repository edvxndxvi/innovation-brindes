import { create } from "zustand";
import { Product } from "../types/interfaces";

interface ModalState {
    selectedProduct: Product | null;
    openModal: (product: Product) => void;
    closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
    selectedProduct: null,
    openModal: (product) => set({ selectedProduct: product }),
    closeModal: () => set({ selectedProduct: null }),
}));