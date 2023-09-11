'use client';

import LoggedIn from '@/components/auth/LoggedIn';
import Button from '@/components/ui/Button';

import { signOut, useAuthState } from '@/lib/auth';

export default function Home() {
  const { user } = useAuthState();

  return (
    <LoggedIn>
      <div>{user?.displayName}</div>
      <div>{user?.email}</div>
      <Button onClick={signOut}>Log Out</Button>
    </LoggedIn>
  );
}
