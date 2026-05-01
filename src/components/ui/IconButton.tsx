import { LucideIcon } from "lucide-react";

interface IconButtonProps {
    icon: LucideIcon;
    badge?: number;
    ariaLabel: string;
}

export default function IconButton({  icon: Icon, badge, ariaLabel }: IconButtonProps) {
    return (
        <button aria-label={ariaLabel} className="flex items-center cursor-pointer">
            <Icon color="white" className="w-6 h-6 sm:w-8 sm:h-8" aria-hidden="true"/>
            {badge && 
                <div className="bg-white w-5 h-5 rounded-full flex items-center justify-center mb-4">
                    <span className="text-sm font-bold text-lime-500 rounded-full">{badge}</span>
                </div>
            }
        </button>
    );
}