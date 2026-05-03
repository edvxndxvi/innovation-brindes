import { Ordenacao } from "@/src/types/interfaces";

interface SelectOrderProps {
    value: Ordenacao;
    onChange: (value: Ordenacao) => void;
}

export default function SelectOrder({ value, onChange }: SelectOrderProps) {
        return (
            <div className="flex items-center gap-2">
                <label htmlFor="ordenar" className="text-sm">Ordenar por:</label>
                <select id="ordenar" className="border border-gray-300 rounded px-3 py-2" value={value} onChange={(e) => onChange(e.target.value as Ordenacao)}>
                    <option value=""> Nenhum</option>
                    <option value="nome_asc">Nome (A-Z)</option>
                    <option value="nome_desc">Nome (Z-A)</option>
                    <option value="preco_asc">Preço (Menor para Maior)</option>
                    <option value="preco_desc">Preço (Maior para Menor)</option>
                </select>
            </div>
        );
}
