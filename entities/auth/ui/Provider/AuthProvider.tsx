'use client';

import { FC, PropsWithChildren } from 'react';

import { AuthContext, useAuthState } from '../../model';
import { AuthUser } from '../../types';

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
