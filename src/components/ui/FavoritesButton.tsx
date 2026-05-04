import { Bookmark } from "lucide-react";

interface FavoritesButtonProps {
    onClick: () => void;
}       

export default function FavoritesButton ({ onClick }: FavoritesButtonProps) {
        return (
            <button onClick={onClick} className="flex items-center gap-2 border border-gray-300 rounded px-3 py-2 cursor-pointer hover:bg-gray-100">
                <Bookmark color="#7ccf00" aria-hidden="true" />
                Favoritos
            </button>
        );
}