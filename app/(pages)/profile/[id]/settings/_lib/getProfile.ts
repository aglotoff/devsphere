import { collection, doc, getDoc } from 'firebase/firestore';

import { firestore } from '@/app/_lib/config/firebase';
import { Profile } from '@/app/_lib/profile';

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
