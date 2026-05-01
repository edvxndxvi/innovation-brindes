import { LucideIcon } from "lucide-react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    type: string;
    placeholder: string;
    icon: LucideIcon;
    error?: string;
}


export default function Input({ type, placeholder, icon: Icon, error, ...rest }: InputProps) {
    return (
        <div>
            <div className="w-full bg-white rounded-full pl-8 py-4 relative flex items-center gap-2 focus-within:outline-2 focus-within:outline-black ">
                <label htmlFor={rest.id} className="sr-only">{placeholder}</label>
                <Icon size={20} />
                <input
                    {...rest}
                    type={type}
                    placeholder={placeholder}
                    className="w-full focus:outline-none focus:border-none"
                />
            </div>
            {error && 
                <p className="text-red-600 mt-1">{error}</p>
            }
        </div>
    );
}