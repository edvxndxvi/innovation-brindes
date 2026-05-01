'use client';

import { Mail, Phone } from "lucide-react";
import IconButton from "../ui/IconButton";
import { useAuthStore } from "@/src/store/authStore";
import UserProfile from "../ui/UserProfile";

export default function Header() {
    const { user } = useAuthStore();

    return (
        <header className="w-full bg-lime-500 py-4">
            <div className="container flex items-center justify-between gap-4">
                <h1 className="text-xl sm:text-2xl font-bold text-white">Innovation Brindes</h1>
                <div className="flex gap-6 sm:gap-6 ">
                    <IconButton icon={Mail} badge={3} ariaLabel="Notifications" />
                    <IconButton icon={Phone} ariaLabel="User Profile" />
                    <UserProfile name={user?.nome_usuario || 'Usuário'} />
                </div>
            </div>
        </header>
    );
}