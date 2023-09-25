import { firestore } from '@/lib/firebase';

import { Profile } from './types';
import { collection, doc, getDoc } from 'firebase/firestore';

export const getProfile = async (id: string) => {
  const docRef = doc(collection(firestore, 'profiles'), id);
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists) return null;
  const data = docSnap.data()!;
  return {
    ...data,
    createTime: data.createTime.toDate().toISOString(),
  } as Profile;
};
