import { updateProfile } from 'firebase/auth';
import { collection, doc, updateDoc } from 'firebase/firestore';

import { Profile } from '@/entities/profile';
import { auth, firestore } from '@/shared/api/firebase';

export const updatePersonalSettings = async (data: Omit<Profile, 'uid'>) => {
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
