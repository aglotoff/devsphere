'use client';

import Button from '@/components/ui/Button';

import { signOut, useAuth } from '@/lib/auth';

export default function Home() {
  const user = useAuth();

  return (
    <>
      <div>{user?.displayName}</div>
      <div>{user?.email}</div>
      <Button onClick={signOut}>Log Out</Button>
    </>
  );
}
