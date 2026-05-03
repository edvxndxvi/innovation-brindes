'use server';

import axios from 'axios';
import { cookies } from 'next/headers';
import { Product } from '../types/interfaces';
import { normalizeProducts } from '../lib/utils';

const apiUrl = process.env.BASE_URL;

export async function getAllProductsRequest(): Promise<Product[]> {
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

    return normalizeProducts(data);
}

export async function searchProductsRequest(busca: string): Promise<Product[]> {
    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value;

    const isNumeric = !isNaN(Number(busca)) && busca !== '';
    const body = isNumeric ? { nome_produto: '', codigo_produto: busca } : { nome_produto: busca, codigo_produto: '' };

    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    };
    const response = await axios.post(`${apiUrl}/api/innova-dinamica/produtos/listar`, body, config);

    const data = response.data;

    return normalizeProducts(data);
}
