import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

import Notifications from '@/components/layout/Notifications';

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <NextTopLoader color="#fb923c" />
        {children}
        <Notifications />
      </body>
    </html>
  );
}
