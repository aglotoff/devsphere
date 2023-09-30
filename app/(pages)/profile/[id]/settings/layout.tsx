import { PropsWithChildren } from 'react';
import { notFound } from 'next/navigation';

import Card from '@/app/_components/ui/Card';
import Container from '@/app/_components/layout/Container';
import LoggedIn from '@/app/_components/auth/LoggedIn';

import ProfileHeader from './_components/ProfileHeader';
import SettingsMenu from './_components/SettingsMenu';
import ProfileProvider from './_components/ProfileProvider';

import { getProfile } from './_lib/getProfile';

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
        <section>
          <ProfileHeader />

          <Container className="flex items-start py-12">
            <Card className="w-72 basis-auto grow-0 shrink-0">
              <Card.Header>Your Details</Card.Header>
              <SettingsMenu basePathname={`/profile/${id}/settings`} />
            </Card>

            <div className="ml-6 grow shrink">{children}</div>
          </Container>
        </section>
      </ProfileProvider>
    </LoggedIn>
  );
};

export default ProfileLayout;
