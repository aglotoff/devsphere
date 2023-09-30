'use client';

import { FC } from 'react';

import Button from '@/app/_components/ui/Button';
import Menu from '@/app/_components/ui/Menu';
import Popover from '@/app/_components/ui/Popover';

import { signOut, useAuth } from '@/app/_lib/auth';

import { UserMenuTrigger } from './UserMenuTrigger';

export const UserMenu: FC = () => {
  const user = useAuth();

  if (user == null) {
    return (
      <Button className="ml-auto" href="/login">
        Sign In
      </Button>
    );
  }

  const firstName = user.displayName?.split(/\s+/)[0] ?? user.uid;

  return (
    <Popover
      content={
        <Menu>
          <Menu.Item onClick={signOut}>Logout</Menu.Item>
        </Menu>
      }
      placement="bottom end"
    >
      {({ ref, ...triggerProps }) => (
        <UserMenuTrigger firstName={firstName} ref={ref} {...triggerProps} />
      )}
    </Popover>
  );
};
