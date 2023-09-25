import { PropsWithChildren } from 'react';
import { notFound } from 'next/navigation';

import LoggedIn from '@/components/auth/LoggedIn';
import Container from '@/components/layout/Container';
import Card from '@/components/ui/Card';

import { getProfile } from '@/lib/profile/getProfile';

import ProfileHeader from './_components/ProfileHeader';
import SettingsMenu from './_components/SettingsMenu';
import ProfileProvider from './_components/ProfileProvider';

export interface ProfileLayoutProps {
  params: { id: string };
}

const ProfileLayout = async ({
  children,
  params: { id },
}: PropsWithChildren<ProfileLayoutProps>) => {
  const profile = await getProfile(id);

  if (profile == null) notFound();

  return (
    <LoggedIn>
      <ProfileProvider defaultProfile={profile}>
        <ProfileHeader />

        <Container className="flex items-start py-12">
          <Card className="w-72 basis-auto grow-0 shrink-0">
            <Card.Header>Your Details</Card.Header>
            <SettingsMenu basePathname={`/profile/${id}/settings`} />
          </Card>

          <div className="ml-6 grow shrink">{children}</div>
        </Container>
      </ProfileProvider>
    </LoggedIn>
  );
};

export default ProfileLayout;
