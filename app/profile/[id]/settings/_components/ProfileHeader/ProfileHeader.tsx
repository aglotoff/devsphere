'use client';

import { FC } from 'react';
import { getName as getCountryName } from 'country-list';

import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';

import { signOut, useAuth } from '@/lib/auth';
import { useProfile } from '@/lib/profile';

export const ProfileHeader: FC = () => {
  const user = useAuth();
  const { profile } = useProfile();

  const handleSignOut = async () => {
    await signOut();

    window.location.reload();
  };

  const dateFormatter = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <header>
      <div className="h-80 bg-gradient-to-t from-black/50"></div>

      <Container className="flex items-center">
        <div className="w-40 h-40 -mt-12 bg-neutral-200 border border-2 border-white rounded-full"></div>

        <div className="ml-4 mt-5 text-sm leading-tight text-stone-500">
          <div className="text-2xl text-zinc-800 font-bold">
            {profile.fullName}
          </div>
          {profile.createTime && (
            <div className="mt-2.5">
              Member since {dateFormatter.format(new Date(profile.createTime))}
            </div>
          )}
          {profile.country && (
            <div className="mt-1.5">{getCountryName(profile.country)}</div>
          )}
        </div>

        {user && (
          <Button onClick={handleSignOut} className="ml-auto">
            Log Out
          </Button>
        )}
      </Container>
    </header>
  );
};
