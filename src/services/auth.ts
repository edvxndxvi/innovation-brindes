'use server';

import axios from "axios";
import { cookies } from "next/headers";
import { LoginResponse } from "../types/interfaces";

const apiUrl = process.env.BASE_URL;

export async function loginRequest(usuario: string, senha: string): Promise<LoginResponse> {
    const body = { email: usuario, senha };
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }   
    const response = await axios.post(
        `${apiUrl}/api/innova-dinamica/login/acessar`,
        body,
        config
    )

    const  data = response.data;
    (await cookies()).set("token", data.token_de_acesso)

    const formattedData = data.map((item: LoginResponse) => ({
            ...item,
            status: +item.status,
            dados_usuario: {
                ...item.dados_usuario,
                codigo_usuario: +item.dados_usuario.codigo_usuario,
                codigo_grupo: +item.dados_usuario.codigo_grupo,
                nome_usuario: item.dados_usuario.nome_usuario.trim(),
                nome_grupo: item.dados_usuario.nome_grupo.trim(),
            }
    }));
    
    return formattedData;
}