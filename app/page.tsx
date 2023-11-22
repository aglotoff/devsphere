'use client';

import { redirect } from 'next/navigation';
import { viewerModel } from '@/entities/viewer';

export default function HomePage() {
  const user = viewerModel.useAuth();

  if (user != null) redirect(`/profile/${user.uid}`);
  else redirect('/login');

  return null;
}
