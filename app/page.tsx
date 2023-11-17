'use client';

import { redirect } from 'next/navigation';
import { authModel } from '@/entities/auth';

export default function HomePage() {
  const user = authModel.useAuth();

  if (user != null) redirect(`/profile/${user.uid}`);
  else redirect('/login');

  return null;
}
