'use client';

import { createContext, useContext } from 'react';

import { Profile } from '../types';

export interface ProfileContext {
  profile: Profile;
  update: (profile: Profile) => void;
}

export const ProfileContext = createContext<ProfileContext>({
  profile: { fullName: '', email: '' },
  update: () => {},
});

export const useCurrentProfile = () => useContext(ProfileContext);
