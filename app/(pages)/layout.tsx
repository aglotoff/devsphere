import { PropsWithChildren } from 'react';

import Header from '@/app/_components/layout/Header';

export interface ProfileLayoutProps {
  params: { id: string };
}

const ProfileLayout = ({ children }: PropsWithChildren<ProfileLayoutProps>) => (
  <>
    <Header />
    <main>{children}</main>
  </>
);

export default ProfileLayout;
