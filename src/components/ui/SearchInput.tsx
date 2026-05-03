import { Search } from "lucide-react";

interface SearchInputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchInput({ value, onChange }: SearchInputProps) {
    return (
        <div className="flex items-center gap-2 border border-gray-300 rounded px-3 py-2 mb-4 w-fit">
            <Search size={20} />
            <input 
                className="flex-1 outline-none"
                type="text" 
                placeholder="Pesquisar produtos" 
                value={value} 
                onChange={onChange} />
        </div>
    );
}