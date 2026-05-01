export interface User {
    codigo_usuario: number;
    nome_usuario: string;
    codigo_grupo: number;
    nome_grupo: string;
}

export interface LoginResponse {
    token_de_acesso: string;
    status: number;
    dados_usuario: User;
}

export interface Product {
    codigo: number;
    nome: string;
    referencia: number;
    codigo_categoria: number;
    imagem: string;
    preco: number;
    descricao: string;
}