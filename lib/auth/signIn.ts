import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from '@/lib/firebase';

export interface SignInOptions {
  email: string;
  password: string;
}

export const signIn = ({ email, password }: SignInOptions) =>
  signInWithEmailAndPassword(auth, email, password);
