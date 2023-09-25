import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { cookies } from 'next/headers';
import NextTopLoader from 'nextjs-toploader';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { PropsWithChildren } from 'react';

import AuthProvider from '@/app/_components/auth/AuthProvider';
import Notifications from '@/app/_components/layout/Notifications';

import { verifySessionCookie } from '@/app/_lib/auth/sessionCookies';

import './globals.css';

config.autoAddCss = false;

const montserrat = Montserrat({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '600', '700'],
});

export const metadata: Metadata = {
  title: 'DevSphere',
  description: 'Toy social network for developers',
};

const RootLayout = async ({ children }: PropsWithChildren) => {
  const user = await verifySessionCookie(cookies());

  return (
    <html lang="en">
      <body className={montserrat.className}>
        <NextTopLoader color="#fb923c" />
        <AuthProvider defaultUser={user}>{children}</AuthProvider>
        <Notifications />
      </body>
    </html>
  );
};

export default RootLayout;
