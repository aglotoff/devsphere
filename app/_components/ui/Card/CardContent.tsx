import { FC, PropsWithChildren } from 'react';

export const CardContent: FC<PropsWithChildren> = ({ children }) => (
  <div className="px-6 py-7">{children}</div>
);
