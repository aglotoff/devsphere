'use client';

import { FC } from 'react';

import { Menu } from '@/shared/ui/Menu';

const items = [
  { slug: '', title: 'Personal Info' },
  { slug: '/profile', title: 'Profile' },
];

export interface SettingsMenuProps {
  basePathname?: string;
}

export const SettingsMenu: FC<SettingsMenuProps> = ({ basePathname = '' }) => (
  <Menu activeBorder="right" size="large">
    {items.map(({ slug, title }) => (
      <Menu.Item key={slug} href={`${basePathname}${slug}`}>
        {title}
      </Menu.Item>
    ))}
  </Menu>
);
