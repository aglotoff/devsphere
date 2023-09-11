import { useEffect, useState } from 'react';
import { auth } from '../firebase';

export interface AuthUser {
  uid: string;
  email: string | null;
  displayName: string | null;
}

export interface AuthState {
  user: AuthUser | null;
  ready: boolean;
}

export const useAuthState = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onIdTokenChanged(async (user) => {
      setUser(
        user && {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        }
      );
      setReady(true);
    });

    return () => unsubscribe();
  }, []);

  return { user, ready };
};
