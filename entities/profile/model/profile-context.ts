'use client';

import { createContext, useContext } from 'react';

import { Profile } from '../types';

export interface ProfileContext {
  profile: Profile;
  update: (profile: Omit<Profile, 'uid'>) => void;
}

export const ProfileContext = createContext<ProfileContext>({
  profile: { fullName: '', email: '', uid: '' },
  update: () => {},
});

export const useCurrentProfile = () => useContext(ProfileContext);
