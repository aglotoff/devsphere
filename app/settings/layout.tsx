import { FC, PropsWithChildren } from 'react';

import LoggedIn from '@/components/auth/LoggedIn';
import Container from '@/components/layout/Container';
import Card from '@/components/ui/Card';

import ProfileHeader from './_components/ProfileHeader';
import SettingsMenu from './_components/SettingsMenu';

const ProfileLayout: FC<PropsWithChildren> = ({ children }) => (
  <LoggedIn>
    <ProfileHeader />

    <Container className="flex items-start py-12">
      <Card className="w-72 basis-auto grow-0 shrink-0">
        <Card.Header>Your Details</Card.Header>
        <SettingsMenu />
      </Card>

      <div className="ml-6 grow shrink">{children}</div>
    </Container>
  </LoggedIn>
);

export default ProfileLayout;
