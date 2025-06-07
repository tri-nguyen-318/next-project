import { getProfile } from '@/lib/actions';
import React from 'react';

export default async function Profile() {
  const res = await getProfile();

  return (
    <div>
      Profile page
      <p>{JSON.stringify(res)}</p>
    </div>
  );
}
