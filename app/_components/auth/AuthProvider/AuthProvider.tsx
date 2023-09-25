'use client';

import { FC, PropsWithChildren } from 'react';

import { AuthContext, AuthUser, useAuthState } from '@/app/_lib/auth';

export interface AuthProviderProps {
  defaultUser: AuthUser | null;
}

export const AuthProvider: FC<PropsWithChildren<AuthProviderProps>> = ({
  children,
  defaultUser,
}) => {
  const auth = useAuthState(defaultUser);
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
