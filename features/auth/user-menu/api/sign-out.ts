import { signOut as firebaseSignOut } from 'firebase/auth';
import { auth } from '@/shared/api/firebase';

export const signOut = async () => {
  await fetch('/api/auth/signout', {
    method: 'POST',
  });

  await firebaseSignOut(auth);
};
