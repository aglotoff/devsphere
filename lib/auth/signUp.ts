import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

import { auth, firestore } from '@/lib/firebase';
import { collection, doc, serverTimestamp, setDoc } from 'firebase/firestore';

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
