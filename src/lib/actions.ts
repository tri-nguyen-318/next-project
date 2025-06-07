'use server';

import { authFetch } from './authFetch';
import { BACKEND_URL } from './constants';
import { getSession } from './session';

export const getProfile = async () => {
  const response = await authFetch(`${BACKEND_URL}/auth/protected`);

  const result = await response.json();

  return result;
};
