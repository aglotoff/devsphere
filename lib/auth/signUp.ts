import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

import { auth } from '@/lib/firebase';

export interface SignUpOptions {
  fullName: string;
  email: string;
  password: string;
}

export const signUp = ({ email, fullName, password }: SignUpOptions) =>
  createUserWithEmailAndPassword(auth, email, password).then(({ user }) =>
    updateProfile(user, {
      displayName: fullName,
    })
  );
