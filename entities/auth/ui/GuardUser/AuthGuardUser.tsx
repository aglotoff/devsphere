'use client';

import { notFound, redirect } from 'next/navigation';
import { FC, PropsWithChildren } from 'react';

import { useAuth } from '../../model';

export interface AuthGuardUserProps extends PropsWithChildren {
  uid?: string;
}

export const AuthGuardUser: FC<AuthGuardUserProps> = ({ children, uid }) => {
  const user = useAuth();

  if (user == null) redirect('/login');

  if (uid && user.uid !== uid) notFound();

  return children;
};
