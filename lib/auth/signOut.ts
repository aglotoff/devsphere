import { signOut as firebaseSignOut } from 'firebase/auth';

import { auth } from '@/lib/firebase';

export const signOut = async () => {
  await firebaseSignOut(auth);

  await fetch('/api/auth/signout', {
    method: 'POST',
  });
};
