'use server';

import axios from 'axios';
import { cookies } from 'next/headers';
import { LoginResponse } from '../types/interfaces';

const apiUrl = process.env.BASE_URL;

export async function loginRequest(usuario: string, senha: string, keepLogged: boolean): Promise<LoginResponse> {
    const body = { email: usuario, senha };
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    const response = await axios.post(`${apiUrl}/api/innova-dinamica/login/acessar`, body, config);

    const data = response.data;
    const cookieStore = await cookies();
    const cincoMinutos = 5 * 60;

    cookieStore.set('token', data.token_de_acesso, {...(keepLogged ? { maxAge: cincoMinutos } : {}),});

    const formattedData: LoginResponse = {
        status: +data.status,
        token_de_acesso: data.token_de_acesso,
        dados_usuario: {
            codigo_usuario: +data.dados_usuario.codigo_usuario,
            codigo_grupo: +data.dados_usuario.codigo_grupo,
            nome_usuario: data.dados_usuario.nome_usuario.trim(),
            nome_grupo: data.dados_usuario.nome_grupo.trim(),
        },
    };

    return formattedData;
}

export async function logout() {
    (await cookies()).delete('token');
}
