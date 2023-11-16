import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { cookies } from 'next/headers';
import NextTopLoader from 'nextjs-toploader';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { PropsWithChildren } from 'react';

import { AuthProvider, AuthUser } from '@/entities/auth';
import { verifySessionCookie } from '@/shared/lib/session-cookies';
import { ToastContainer } from '@/shared/ui/ToastContainer';

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
  const decodedToken = await verifySessionCookie(cookies());

  const user: AuthUser | null = decodedToken && {
    uid: decodedToken.uid,
    email: decodedToken.email!,
    displayName: '',
  };

  return (
    <html lang="en">
      <body className={montserrat.className}>
        <NextTopLoader color="#fb923c" />
        <AuthProvider defaultUser={user}>{children}</AuthProvider>
        <ToastContainer />
      </body>
    </html>
  );
};

export default RootLayout;
