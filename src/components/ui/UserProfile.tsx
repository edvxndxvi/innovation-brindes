import Image from "next/image";

interface UserProfileProps {
    name: string;
}

export default function UserProfile({ name }: UserProfileProps) {
    const dataHoje = new Date();
    const diaSemana = dataHoje.toLocaleDateString('pt-BR', { weekday: 'long' });
    const diaCurto = diaSemana.charAt(0).toUpperCase() + diaSemana.slice(1);
    const dataCompleta = `${diaCurto}, ${dataHoje.toLocaleDateString('pt-BR')}`;

    return (
       <div className="flex items-center">
            <Image
                src="/avatar.jpg"
                alt={`Foto de perfil de ${name}`}
                width={64}
                height={64}
                className="cursor-pointer rounded-full border-4 border-white w-10 h-10 sm:w-16 sm:h-16 sm:border-6  shrink-0"
            />
            <div className="hidden sm:flex flex-col ml-4">
                <span className="text-white font-thin">{name}</span>
                <span className="text-sm text-white font-thin">{dataCompleta}</span>
            </div>
       </div>
    );
}