'use client';

import { redirect } from 'next/navigation';
import { FC, PropsWithChildren } from 'react';

import { useAuth } from '../../model';

export const ViewerGuardGuest: FC<PropsWithChildren> = ({ children }) => {
  const user = useAuth();
  if (user != null) redirect(`/profile/${user.uid}`);

  return children;
};
