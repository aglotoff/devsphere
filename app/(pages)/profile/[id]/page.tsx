'use client';

import { Metadata, NextPage } from 'next';

import { ProfilePersonalInfo } from '@/widgets/profile-personal-info';
import { ProfileAbout } from '@/widgets/profile-about';
import { profileModel } from '@/entities/profile';
import { Container } from '@/shared/ui/Container';

export const metadata: Metadata = {
  title: 'About',
};

const ProfilePage: NextPage = () => {
  const { profile } = profileModel.useCurrentProfile();

  return (
    <Container className="flex items-start py-12">
      <div className="w-72 basis-auto grow-0 shrink-0">
        <ProfilePersonalInfo profile={profile} />
      </div>

      <div className="ml-6 grow shrink">
        <ProfileAbout profile={profile} />
      </div>
    </Container>
  );
};

export default ProfilePage;
