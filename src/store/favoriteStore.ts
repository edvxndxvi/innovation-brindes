import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '../types/interfaces';

interface FavoritesState {
    favorites: Product[];
    toggleFavorite: (product: Product) => void;
    isFavorite: (codigo: number) => boolean;
}

export const useFavoritesStore = create<FavoritesState>()(
    persist(
        (set, get) => ({
            favorites: [],
            toggleFavorite: (product) => {
                const { favorites } = get();
                const isFav = favorites.some((fav) => fav.codigo === product.codigo);
                const newList = isFav
                    ? favorites.filter((fav) => fav.codigo !== product.codigo)
                    : [...favorites, product];
                set({ favorites: newList });
            },
            isFavorite: (codigo) => {
                const { favorites } = get();
                return favorites.some((fav) => fav.codigo === codigo);
            },
        }),
        { name: 'favorites-storage' }
    )
);