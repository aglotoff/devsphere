import { FC } from 'react';
import Link from 'next/link';

import Container from '@/app/_components/layout/Container';
import UserMenu from '@/app/_components/layout/UserMenu';
import Logo from '@/app/_components/ui/Logo';

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
