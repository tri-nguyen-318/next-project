'use server';

import dayjs from 'dayjs';
import * as jose from 'jose';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { Role } from './type';

export type Session = {
  user: {
    id: string;
    name: string;
    role: Role;
  };
  accessToken: string;
  refreshToken: string;
};

const secretKey = process.env.JWT_SECRET_KEY;
const encodedKey = new TextEncoder().encode(secretKey);

export async function createSession(payload: Session) {
  const expiredAt = dayjs().add(7, 'day').toDate();

  const session = await new jose.SignJWT(payload)
    .setProtectedHeader({
      alg: 'HS256',
    })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(encodedKey);

  (await cookies()).set('session', session, {
    httpOnly: true,
    secure: true,
    expires: expiredAt,
    sameSite: 'lax',
    path: '/',
  });
}

export async function getSession() {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('session');

  if (!sessionCookie) {
    return null;
  }

  try {
    const session = await jose.jwtVerify(sessionCookie.value, encodedKey, {
      algorithms: ['HS256'],
    });

    return session.payload as Session;
  } catch (error) {
    console.error('Error verifying session:', error);
    redirect('/auth/signin');
  }
}

export async function updateSession({
  accessToken,
  refreshToken,
}: {
  accessToken: string;
  refreshToken: string;
}) {
  const cookie = (await cookies()).get('session')?.value;

  if (!cookie) return null;

  const { payload } = await jose.jwtVerify<Session>(cookie, encodedKey);

  if (!payload) throw new Error('Invalid session payload');

  const newPayload: Session = {
    user: {
      ...payload.user,
    },
    accessToken,
    refreshToken,
  };

  await createSession(newPayload);
}

export const deleteSession = async () => {
  const cookieStore = await cookies();
  cookieStore.delete('session');
};
