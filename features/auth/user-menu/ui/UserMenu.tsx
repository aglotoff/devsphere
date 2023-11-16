'use client';

import { FC } from 'react';

import { authModel } from '@/entities/auth';
import { Button } from '@/shared/ui/Button';
import { Menu } from '@/shared/ui/Menu';
import { Popover } from '@/shared/ui/Popover';

import { UserMenuTrigger } from './UserMenuTrigger';
import { signOut } from '../api';

export const UserMenu: FC = () => {
  const user = authModel.useAuth();

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
