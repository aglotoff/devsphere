import { collection, doc, getDoc } from 'firebase/firestore';

import { Profile } from '@/entities/profile';
import { firestore } from '@/shared/api/firebase';

export const getProfile = async (uid: string) => {
  const docRef = doc(collection(firestore, 'profiles'), uid);
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists) return null;
  const data = docSnap.data()!;
  return {
    ...data,
    uid,
    createTime: data.createTime.toDate().toISOString(),
  } as Profile;
};
