import { PropsWithChildren } from 'react';

import { Header } from '@/widgets/header';

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
