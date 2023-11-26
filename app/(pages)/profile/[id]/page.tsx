import { Metadata, NextPage } from 'next';

import { ProfilePersonalInfo } from '@/widgets/profile-personal-info';
import { ProfileAbout } from '@/widgets/profile-about';
import { Container } from '@/shared/ui/Container';

export const metadata: Metadata = {
  title: 'About',
};

const ProfilePage: NextPage = () => (
  <Container className="flex items-start py-12">
    <div className="w-72 basis-auto grow-0 shrink-0">
      <ProfilePersonalInfo />
    </div>

    <div className="ml-6 grow shrink">
      <ProfileAbout />
    </div>
  </Container>
);

export default ProfilePage;
