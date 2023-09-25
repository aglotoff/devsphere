import { updateProfile } from 'firebase/auth';
import { collection, doc, updateDoc } from 'firebase/firestore';

import { auth, firestore } from '@/lib/firebase';

import { Profile } from './types';

export const updatePersonalInfo = async (data: Profile) => {
  const { currentUser } = auth;
  if (currentUser == null) throw new Error('unauthenticated');

  await updateDoc(
    doc(collection(firestore, 'profiles'), currentUser.uid),
    Object.fromEntries(
      Object.entries(data).filter(([, value]) => typeof value !== 'undefined')
    )
  );

  // Update auth user display name as well
  await updateProfile(currentUser, { displayName: data.fullName });

  await currentUser.reload();
};
