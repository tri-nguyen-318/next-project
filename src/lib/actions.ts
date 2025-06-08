'use server';

import { CreateInvoiceData } from '@/app/invoice/components/CreateInvoiceDialog';
import { authFetch } from './authFetch';
import { BACKEND_URL } from './constants';

export const getProfile = async () => {
  const response = await authFetch(`${BACKEND_URL}/auth/protected`);

  const result = await response.json();

  return result;
};

export const createInvoice = async (data: CreateInvoiceData) => {
  const response = await authFetch(`${BACKEND_URL}/invoice`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to create invoice');
  }

  const result = await response.json();
  return result;
};
