'use server';

import axios from 'axios';
import { cookies } from 'next/headers';
import { Product } from '../types/interfaces';

const apiUrl = process.env.BASE_URL;

export async function getAllProductsRequest(): Promise<Product[]>{
    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value;

    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    };
    const response = await axios.get(`${apiUrl}/api/innova-dinamica/produtos/listar`, config);

    const data = response.data;

   const formattedData = data.map((item: Product) => ({
        ...item,
        codigo: +item.codigo,
        referencia: +item.referencia,
        codigo_categoria: +item.codigo_categoria,
        preco: Number(Number(item.preco).toFixed(2)),
        imagem: item.imagem.replace(/\\\//g, "/"),
    }));

    return formattedData;
}
