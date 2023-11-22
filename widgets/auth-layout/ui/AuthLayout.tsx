import { FC, PropsWithChildren } from 'react';
import Image from 'next/image';

import { Logo } from '@/shared/ui/Logo';

export interface AuthLayoutProps {
  title?: string;
  description?: string;
}

export const AuthLayout: FC<PropsWithChildren<AuthLayoutProps>> = ({
  children,
  description,
  title,
}) => {
  return (
    <div className="flex flex-col p-8 min-h-screen bg-gradient-to-r from-gray-200 from-50% to-zinc-100 to-50%">
      <div className="m-auto w-full max-w-5xl flex flex-row">
        <header className="flex flex-col w-3/6 p-8 bg-gradient-radial from-zinc-800 to-zinc-700 text-white text-sm leading-normal">
          <Logo className="mb-8" />

          <div className="mb-12">
            {title && <h1 className="mb-2 text-2xl font-bold">{title}</h1>}
            {description && <p>{description}</p>}
          </div>

          <Image
            src="/images/network.svg"
            height={800}
            width={800}
            alt=""
            className="mt-auto mx-auto w-5/6"
          />
        </header>
        <main className="flex flex-col justify-center w-3/6 p-12 bg-white">
          {children}
        </main>
      </div>
    </div>
  );
};
