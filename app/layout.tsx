import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { cookies } from 'next/headers';
import NextTopLoader from 'nextjs-toploader';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { PropsWithChildren } from 'react';

import AuthProvider from '@/components/auth/AuthProvider';
import Notifications from '@/components/layout/Notifications';

import { auth } from '@/lib/firebase/admin';

import './globals.css';
import { AuthUser } from '@/lib/auth';

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
  const cookieStore = cookies();
  const token = cookieStore.get('token');

  let user: AuthUser | null = null;

  if (token) {
    try {
      const res = await auth.verifySessionCookie(token.value);

      user = {
        uid: res.uid,
        email: res.email!,
        displayName: '',
      };
    } catch (err) {}
  }

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
