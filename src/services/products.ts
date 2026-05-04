'use server';

import api from '../lib/axiosInterceptor';
import { Product } from '../types/interfaces';
import { normalizeProducts } from '../lib/utils';
import { redirect } from 'next/navigation';

const apiUrl = process.env.BASE_URL;

export async function getAllProductsRequest(): Promise<Product[]> {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    const response = await api.get(`${apiUrl}/api/innova-dinamica/produtos/listar`, config);

    const data = response.data;

    if (data.status === 'error') {
        redirect('/login');
    }

    return normalizeProducts(data);
}

export async function searchProductsRequest(busca: string): Promise<Product[]> {
    const isNumeric = !isNaN(Number(busca)) && busca !== '';
    const body = isNumeric ? { nome_produto: '', codigo_produto: busca } : { nome_produto: busca, codigo_produto: '' };

    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    const response = await api.post(`${apiUrl}/api/innova-dinamica/produtos/listar`, body, config);

    const data = response.data;

    if (data.status === 'error') {
        redirect('/login');
    }

    return normalizeProducts(data);
}
