'use server';

import axios from "axios";
import { cookies } from "next/headers";

const apiUrl = process.env.BASE_URL;

export async function loginRequest(usuario: string, senha: string){
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

    data.status = +data.status
    data.dados_usuario.codigo_usuario = +data.dados_usuario.codigo_usuario
    data.dados_usuario.codigo_grupo = +data.dados_usuario.codigo_grupo
    data.dados_usuario.nome_usuario = data.dados_usuario.nome_usuario.trim()
    data.dados_usuario.nome_grupo = data.dados_usuario.nome_grupo.trim()
    
    return data;
}