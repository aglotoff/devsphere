import { PropsWithChildren } from 'react';
import { notFound } from 'next/navigation';

import { ProfileHeader } from '@/widgets/profile-header';
import { SettingsMenu } from '@/widgets/settings-menu';
import { AuthGuardUser } from '@/entities/auth';
import { ProfileProvider } from '@/entities/profile';
import { Card } from '@/shared/ui/Card';
import { Container } from '@/shared/ui/Container';

import { getProfile } from './_api';

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
    <AuthGuardUser>
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
    </AuthGuardUser>
  );
};

export default ProfileLayout;
