import { createContext, useContext } from 'react';

export interface AuthUser {
  uid: string;
  email: string | null;
  displayName: string | null;
}

export const AuthContext = createContext<AuthUser | null>(null);

export const useAuth = () => useContext(AuthContext);
