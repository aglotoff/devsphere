import { PropsWithChildren } from 'react';
import { notFound } from 'next/navigation';

import { ProfileHeader } from '@/widgets/profile-header';
import { ProfileMenu } from '@/widgets/profile-menu';
import { ProfileProvider } from '@/entities/profile';

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
    <ProfileProvider defaultProfile={profile}>
      <section>
        <ProfileHeader />
        <ProfileMenu basePathname={`/profile/${id}`} />
        {children}
      </section>
    </ProfileProvider>
  );
};

export default ProfileLayout;
