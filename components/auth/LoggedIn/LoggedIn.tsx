'use client';

import { redirect } from 'next/navigation';
import { FC, PropsWithChildren } from 'react';

import { useAuth } from '@/lib/auth';

export const LoggedIn: FC<PropsWithChildren> = ({ children }) => {
  const user = useAuth();
  if (user == null) redirect('/login');

  return children;
};
