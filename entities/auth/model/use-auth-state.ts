'use client';

import { useEffect, useState } from 'react';

import { auth } from '@/shared/api/firebase';

import { AuthUser } from '../types';

export const useAuthState = (defaultUser: AuthUser | null = null) => {
  const [user, setUser] = useState(defaultUser);

  useEffect(() => {
    const unsubscribe = auth.onIdTokenChanged((user) => {
      setUser(
        user && {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        }
      );
    });

    return () => unsubscribe();
  }, []);

  return user;
};
