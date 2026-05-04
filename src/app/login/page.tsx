import LoginForm from './_components/LoginForm';

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Login - Innovation Brindes',
    description: 'Faça login para acessar a plataforma.',
};

export default function Login() {
    return (
        <main className="relative flex items-center justify-center h-screen bg-[url('/login-bg.jpg')] bg-cover">
            <div className="absolute inset-0 bg-black/60 z-0"></div>
            <div className="z-10 gap-8 flex flex-col items-center px-4 w-full">
                <h1 className="text-2xl sm:text-3xl font-bold text-lime-500 z-10 w-full text-center">
                    Bem-vindo a Innovation Brindes
                </h1>
                <LoginForm />
            </div>
        </main>
    );
}
