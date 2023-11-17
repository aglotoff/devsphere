import { FC } from 'react';

import { Profile } from '@/entities/profile';
import { Card } from '@/shared/ui/Card';

export interface ProfileAboutProps {
  profile: Profile;
}

export const ProfileAbout: FC<ProfileAboutProps> = ({ profile }) =>
  profile.about && (
    <Card>
      <Card.Header>About</Card.Header>
      <Card.Content>
        <div className="text-stone-500 text-sm leading-normal">
          {profile.about}
        </div>
      </Card.Content>
    </Card>
  );
