import { getProfile } from '@/lib/actions';
import React from 'react';

type Props = {};

export default async function Profile({}: Props) {
  const res = await getProfile();

  return (
    <div>
      Profile page
      <p>{JSON.stringify(res)}</p>
    </div>
  );
}
