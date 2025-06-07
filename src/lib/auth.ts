'use server';

import { redirect } from 'next/navigation';
import { BACKEND_URL } from './constants';
import { FormState, SignInFormScheme, SignUpFormScheme } from './type';
import { createSession } from './session';

export async function signUp(
  _state: FormState,
  formData: FormData,
): Promise<FormState> {
  const validationFields = SignUpFormScheme.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if (!validationFields.success) {
    return {
      error: validationFields.error.flatten().fieldErrors,
    };
  }

  const response = await fetch(`${BACKEND_URL}/auth/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(validationFields.data),
  });

  if (response.ok) {
    redirect('/auth/signin');
  }

  return {
    message:
      response.status === 409
        ? 'The user already exists.'
        : response.statusText,
  };
}

export async function signIn(
  _state: FormState,
  formData: FormData,
): Promise<FormState> {
  const validationFields = SignInFormScheme.pick({
    email: true,
    password: true,
  }).safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if (!validationFields.success) {
    return {
      error: validationFields.error.flatten().fieldErrors,
    };
  }

  const response = await fetch(`${BACKEND_URL}/auth/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(validationFields.data),
  });

  if (response.ok) {
    const result = await response.json();

    await createSession({
      user: {
        id: result.id,
        name: result.name,
        role: result.role,
      },
      accessToken: result.accessToken,
      refreshToken: result.refreshToken,
    });
    redirect('/profile');
  } else {
    return {
      message:
        response.status === 401
          ? 'Invalid email or password.'
          : response.statusText,
    };
  }
}

export const refreshToken = async (
  oldRefreshToken: string,
): Promise<string> => {
  try {
    const response = await fetch(`${BACKEND_URL}/auth/refresh`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // ← This is crucial
      },
      body: JSON.stringify({
        refresh: oldRefreshToken,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to refresh token');
    }

    const { refreshToken, accessToken } = await response.json();

    const updateRes = await fetch(
      `${process.env.FRONTEND_URL}/api/auth/update`,
      {
        method: 'POST',
        body: JSON.stringify({
          accessToken,
          refreshToken,
        }),
      },
    );

    if (!updateRes.ok) {
      throw new Error('Failed to update session');
    }

    return accessToken;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error refreshing token:', error);
    redirect('/auth/signin');
  }
};
