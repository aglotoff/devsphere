'use client';

import { FC } from 'react';

import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';

import { signOut, useAuthState } from '@/lib/auth';

export const ProfileHeader: FC = () => {
  const { user } = useAuthState();

  return (
    user && (
      <header>
        <div className="h-80 bg-gradient-to-t from-black/50"></div>

        <Container className="flex items-center">
          <div className="w-40 h-40 -mt-12 bg-neutral-200 border border-2 border-white rounded-full"></div>

          <div className="ml-4 mt-5 text-sm leading-tight text-stone-500">
            <div className="text-2xl text-zinc-800 font-bold">
              {user.displayName}
            </div>
            <div className="mt-2.5">Member since August 2017</div>
            <div className="mt-2">India</div>
          </div>

          <Button onClick={signOut} className="ml-auto">
            Log Out
          </Button>
        </Container>
      </header>
    )
  );
};
