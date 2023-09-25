'use client';

import { redirect } from 'next/navigation';

import { useAuth } from '@/app/_lib/auth';

export default function Home() {
  const user = useAuth();

  if (user != null) redirect(`/profile/${user.uid}/settings`);
  else redirect('/login');

  return null;
}
