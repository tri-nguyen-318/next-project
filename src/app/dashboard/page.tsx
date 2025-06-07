import { getSession } from '@/lib/session';
import { Role } from '@/lib/type';
import { redirect } from 'next/navigation';
import React from 'react';

export default async function Dashboard() {
  const session = await getSession();
  console.log('🚀 ~ Dashboard ~ session:', session);

  if (!session || !session.user) {
    redirect('/auth/signin');
  }

  if (session.user.role !== Role.ADMIN) {
    redirect('/auth/signin');
  }

  return <div>page</div>;
}
