'use client';

import { FC } from 'react';

import { profileModel } from '@/entities/profile';
import { Card } from '@/shared/ui/Card';

export const ProfileAbout: FC = () => {
  const { profile } = profileModel.useCurrentProfile();

  return (
    profile.about && (
      <Card>
        <Card.Header>About</Card.Header>
        <Card.Content>
          <div className="text-stone-500 text-sm leading-normal">
            {profile.about}
          </div>
        </Card.Content>
      </Card>
    )
  );
};
