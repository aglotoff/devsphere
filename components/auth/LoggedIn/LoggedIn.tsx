'use client';

import { redirect } from 'next/navigation';
import { FC, PropsWithChildren, useEffect } from 'react';

import LoadingScreen from '@/components/auth/LoadingScreen';

import { useAuthState } from '@/lib/auth';

export const LoggedIn: FC<PropsWithChildren> = ({ children }) => {
  const { user, ready } = useAuthState();

  useEffect(() => {
    if (ready && user == null) redirect('/login');
  }, [user, ready]);

  if (!ready) {
    return <LoadingScreen />;
  }

  return children;
};
