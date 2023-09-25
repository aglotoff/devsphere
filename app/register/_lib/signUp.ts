import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { collection, doc, serverTimestamp, setDoc } from 'firebase/firestore';

import { auth, firestore } from '@/app/_lib/config/firebase';

export interface SignUpOptions {
  fullName: string;
  email: string;
  password: string;
}

export const signUp = async ({ email, fullName, password }: SignUpOptions) => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);

  await fetch('/api/auth/signin', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      token: await user.getIdToken(),
    }),
  });

  await setDoc(doc(collection(firestore, 'profiles'), user.uid), {
    fullName,
    email,
    createTime: serverTimestamp(),
  });

  await updateProfile(user, {
    displayName: fullName,
  });

  await user.reload();

  return { user };
};
