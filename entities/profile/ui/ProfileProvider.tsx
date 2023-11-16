'use client';

import { FC, PropsWithChildren, useState } from 'react';

import { ProfileContext } from '../model';
import { Profile } from '../types';

export interface ProfileProviderProps {
  defaultProfile: Profile;
}

export const ProfileProvider: FC<PropsWithChildren<ProfileProviderProps>> = ({
  children,
  defaultProfile,
}) => {
  const [profile, setProfile] = useState(defaultProfile);

  const update = (newValue: Profile) => {
    setProfile((oldValue) => ({
      ...oldValue,
      ...newValue,
    }));
  };

  return (
    <ProfileContext.Provider value={{ profile, update }}>
      {children}
    </ProfileContext.Provider>
  );
};
