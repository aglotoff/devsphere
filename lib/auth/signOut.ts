import { signOut as firebaseSignOut } from 'firebase/auth';

import { auth } from '@/lib/firebase';

export const signOut = () => firebaseSignOut(auth);
