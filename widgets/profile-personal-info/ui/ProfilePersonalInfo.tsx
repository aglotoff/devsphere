import { FC } from 'react';
import { getName as getCountryName } from 'country-list';

import { Card } from '@/shared/ui/Card';

import { Profile, profileLib } from '@/entities/profile';

import { ProfilePersonalInfoItem } from './ProfilePersonalInfoItem';

export interface ProfilePersonalInfoProps {
  profile: Profile;
}

export const ProfilePersonalInfo: FC<ProfilePersonalInfoProps> = ({
  profile,
}) => (
  <Card>
    <Card.Header>Personal Info</Card.Header>

    <dl>
      {profile.createTime && (
        <ProfilePersonalInfoItem
          title="Member Since"
          text={profileLib.formatCreationDate(profile.createTime)}
        />
      )}
      {profile.country && (
        <ProfilePersonalInfoItem
          title="Leaves In"
          text={getCountryName(profile.country)}
        />
      )}
      {profile.birthDate && (
        <ProfilePersonalInfoItem title="Birthday" text={profile.birthDate} />
      )}
      {profile.gender && (
        <ProfilePersonalInfoItem title="Gender" text={profile.gender} />
      )}
      {profile.status && (
        <ProfilePersonalInfoItem title="Status" text={profile.status} />
      )}
      {profile.email && (
        <ProfilePersonalInfoItem title="Email" text={profile.email} />
      )}
      {profile.phone && (
        <ProfilePersonalInfoItem title="Phone No" text={profile.phone} />
      )}
    </dl>
  </Card>
);
