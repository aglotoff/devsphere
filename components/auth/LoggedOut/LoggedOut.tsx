'use client';

import { redirect } from 'next/navigation';
import { FC, PropsWithChildren } from 'react';

import { useAuth } from '@/lib/auth';

export const LoggedOut: FC<PropsWithChildren> = ({ children }) => {
  const user = useAuth();
  if (user != null) redirect(`/profile/${user.uid}/settings`);

  return children;
};
