import { FC } from 'react';
import Link from 'next/link';

import { UserMenu } from '@/features/auth/user-menu';
import { Container } from '@/shared/ui/Container';
import { Logo } from '@/shared/ui/Logo';

export const Header: FC = () => {
  return (
    <header className="sticky left-0 top-0 bg-zinc-800 z-40 py-1">
      <Container className="h-14 flex">
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>

        <UserMenu />
      </Container>
    </header>
  );
};
