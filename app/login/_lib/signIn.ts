import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from '@/app/_lib/config/firebase';

export interface SignInOptions {
  email: string;
  password: string;
}

export const signIn = async ({ email, password }: SignInOptions) => {
  const { user } = await signInWithEmailAndPassword(auth, email, password);

  await fetch('/api/auth/signin', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      token: await user.getIdToken(),
    }),
  });

  return { user };
};
