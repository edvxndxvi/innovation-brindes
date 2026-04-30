import { Lock, User } from "lucide-react";
import Input from "./Input";
import Link from "next/link";

export default function LoginForm(){
    return (
        <div className="w-full flex items-center justify-center">
            <form className="bg-lime-500 w-150 rounded-md p-8 pt-28 mb-4">
                <div className="max-w-sm mx-auto">
                    <div className="mb-6 flex flex-col gap-4">
                        <Input type="text" placeholder="Usuário" icon={User} name="usuario" id="usuario"/>
                        <Input type="password" placeholder="Senha" icon={Lock} name="senha" id="senha"/>
                    </div>
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center">
                            <input type="checkbox" name="logado" id="logado" className="bg-transparent border border-white "/>
                            <label htmlFor="logado" className="ml-2 text-white">Manter logado</label>
                        </div>
                        <Link href="#" className="text-white cursor-pointer hover:underline">Esqueceu a senha?</Link>
                    </div>
                    <div className="flex items-center justify-center">
                        <button className="bg-white hover:opacity-75 py-4 w-40 rounded-full" type="submit">
                            Login
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}