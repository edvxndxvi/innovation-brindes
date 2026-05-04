import { Bookmark, PackageOpen } from 'lucide-react';
import Image from 'next/image';

interface ProductCardProps {
    codigo: number;
    nome: string;
    imagem: string;
    preco: number;
    descricao: string;
    onFavorite: () => void;
    isFavorite: boolean;
}

export default function ProductCard({ codigo, nome, imagem, preco, descricao, onFavorite, isFavorite }: ProductCardProps) {
    const cores = [
        'bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-400', 'bg-gray-800',
        'bg-orange-500', 'bg-purple-500', 'bg-pink-400', 'bg-teal-500', 'bg-cyan-400',
        'bg-lime-500', 'bg-amber-600', 'bg-indigo-500', 'bg-rose-400', 'bg-slate-500'
    ];

    return (
        <div className="flex flex-col gap-2 w-full :max-w-[250px]">
            <div className="text-center">
                <h3 className="font-bold text-lg line-clamp-1">{nome}</h3>
                <span className="font-medium">{codigo}</span>
            </div>
            <div className="border border-gray-300 rounded-xs">
                <div className="relative">
                    <Image
                        src={imagem}
                        alt={nome}
                        width={233}
                        height={290}
                        loading='eager'
                    />
                    <div className="absolute bg-gray-100 p-1 top-0 right-0">
                        <span className="text-blue-400 font-bold" aria-label="Produto exclusivo">EXCLUSIVO!</span>
                    </div>
                    <div className="absolute bg-background border border-gray-300 border-l-0 rounded-xs rounded-tr-xl p-2 pl-20 bottom-0 left-0 flex items-center">
                        <div className="absolute -top-5 left-0 ">
                            <PackageOpen color="#7ccf00" className="bg-white absolute w-18 h-18 inline-block mr-1" aria-hidden="true"/>
                        </div>
                        <span className="font-semibold text-sm text-gray-600 inline-block w-[15ch] wrap-break-words">
                            com embalagem especial
                        </span>
                    </div>
                </div>

                <div className="p-4">
                    <p className="text-sm mb-4 line-clamp-2 min-h-16">{descricao}</p>
                    <div className="flex flex-col gap-2">
                        <p className="text-sm font-bold">Cores:</p>
                        <div className="grid grid-cols-6 gap-2 w-fit">
                            {cores.map((cor) => (
                                <button key={cor} className={`${cor} w-4 h-4 rounded-full cursor-pointer select-none`} aria-label={`Selecionar cor ${cor}`}/>
                            ))}
                        </div>
                    </div>
                    
                    <div className='flex justify-between'>
                        <button 
                            aria-label={`Adicionar produto ${nome} aos favoritos`}
                            className='cursor-pointer'
                            onClick={onFavorite}
                        >
                            <Bookmark color="#7ccf00" fill={isFavorite ? "#7ccf00" : "none"} className="bg-white w-8 h-8 rounded-full p-1" aria-hidden="true" />
                        </button>

                        <div className="flex flex-col items-end">
                            <div>
                                <p className="text-sm">a partir de</p>
                                <p className="font-bold text-2xl">
                                    {preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                </p>
                            </div>
                            <p className="text-sm">gerado pela melhor oferta</p>
                        </div>  
                    </div>
                </div>
            </div>
            <button className="bg-lime-500 w-full uppercase text-white font-bold py-1 rounded-sm cursor-pointer hover:opacity-75" aria-label={`Conferir produto ${nome}`}>Confira</button>
        </div>
    );
}
