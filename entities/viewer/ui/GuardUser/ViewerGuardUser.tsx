'use client';

import { notFound, redirect } from 'next/navigation';
import { FC, PropsWithChildren } from 'react';

import { useAuth } from '../../model';

export interface ViewerGuardUserProps extends PropsWithChildren {
  uid?: string;
}

export const ViewerGuardUser: FC<ViewerGuardUserProps> = ({
  children,
  uid,
}) => {
  const user = useAuth();

  if (user == null) redirect('/login');

  if (uid && user.uid !== uid) notFound();

  return children;
};
