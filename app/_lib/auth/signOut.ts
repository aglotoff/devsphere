import { signOut as firebaseSignOut } from 'firebase/auth';

import { auth } from '@/app/_lib/config/firebase';

export const signOut = async () => {
  await fetch('/api/auth/signout', {
    method: 'POST',
  });

  await firebaseSignOut(auth);
};
