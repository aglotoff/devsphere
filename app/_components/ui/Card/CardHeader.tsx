import { FC, PropsWithChildren } from 'react';

export const CardHeader: FC<PropsWithChildren> = ({ children }) => (
  <div className="px-6 py-4 text-lg text-zinc-800 font-bold border-b border-neutral-200">
    {children}
  </div>
);
