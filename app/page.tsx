'use client';

import { redirect } from 'next/navigation';
import { authModel } from '@/entities/auth';

export default function Home() {
  const user = authModel.useAuth();

  if (user != null) redirect(`/profile/${user.uid}/settings`);
  else redirect('/login');

  return null;
}
