'use client';

import { FC } from 'react';

import { viewerModel } from '@/entities/viewer';
import { TabNav } from '@/shared/ui/TabNav';
import { profileModel } from '@/entities/profile';

const items = [
  { slug: '', title: 'About' },
  { slug: '/settings', title: 'Settings', auth: true },
];

export interface ProfileMenuProps {
  basePathname?: string;
}

export const ProfileMenu: FC<ProfileMenuProps> = ({ basePathname = '' }) => {
  const auth = viewerModel.useAuth();
  const { profile } = profileModel.useCurrentProfile();

  const visibleItems = items.filter(
    (item) => !item.auth || profile.uid === auth?.uid
  );

  return (
    <TabNav className="mt-14">
      {visibleItems.map(({ slug, title }) => (
        <TabNav.Item key={slug} href={`${basePathname}${slug}`}>
          {title}
        </TabNav.Item>
      ))}
    </TabNav>
  );
};
