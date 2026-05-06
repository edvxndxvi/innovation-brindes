'use client';

import { Lock, User } from 'lucide-react';
import Input from '../../../components/ui/Input';
import Link from 'next/link';
import { Controller, useForm } from 'react-hook-form';
import { LoginFormData, loginSchema } from '@/src/schemas/authSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginRequest } from '@/src/services/auth';
import { useAuthStore } from '@/src/store/authStore';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [responseError, setResponseError] = useState('');
    const { setLogin } = useAuthStore();
    const router = useRouter();

    const {
        control,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            usuario: '',
            senha: '',
        },
    });

    const onSubmit = async (data: LoginFormData) => {
        setResponseError('');

        try {
            const response = await loginRequest(data.usuario, data.senha, isChecked);
            if (response.status === 0) {
                setResponseError('Email ou senha inválido.');
                console.log(responseError);
                return;
            }

            const { dados_usuario: user } = response;
            setLogin(user);
            router.push('/produtos');
        } catch (err: any) {
            setResponseError('Algo deu errado com nosso servidor, tente novamente em alguns minutos.');
        }
    };

    return (
        <div className="w-full flex items-center justify-center">
            <form
                className="bg-lime-500 w-full max-w-150 rounded-md p-8 pt-28 mb-4"
                onSubmit={handleSubmit(onSubmit)}
                method="POST"
            >
                <div className="max-w-sm mx-auto">
                    <div className="mb-6 flex flex-col gap-4">
                        <Controller
                            control={control}
                            name="usuario"
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    type="text"
                                    placeholder="Usuário"
                                    icon={User}
                                    name="usuario"
                                    id="usuario"
                                    error={errors?.usuario?.message}
                                    value={value}
                                    onChange={onChange}
                                    disabled={isSubmitting}
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name="senha"
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    type="password"
                                    placeholder="Senha"
                                    icon={Lock}
                                    name="senha"
                                    id="senha"
                                    error={errors?.senha?.message}
                                    value={value}
                                    onChange={onChange}
                                    disabled={isSubmitting}
                                />
                            )}
                        />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-8">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                name="logado"
                                id="logado"
                                checked={isChecked}
                                onChange={(e) => setIsChecked(e.target.checked)}
                                className="bg-transparent border border-white"
                            />
                            <label htmlFor="logado" className="ml-2 text-white">
                                Manter logado
                            </label>
                        </div>
                        <Link href="#" className="text-white cursor-pointer hover:underline">
                            Esqueceu a senha?
                        </Link>
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            className={`bg-white hover:opacity-75 py-4 w-40 rounded-full
                                ${isSubmitting ? 'opacity-75' : 'opacity-100'}
                            `}
                            type="submit"
                            disabled={isSubmitting}
                        >
                            Login
                        </button>
                    </div>
                    {responseError && <p className="text-red-600 mt-1 text-center">{responseError}</p>}
                </div>
            </form>
        </div>
    );
}
