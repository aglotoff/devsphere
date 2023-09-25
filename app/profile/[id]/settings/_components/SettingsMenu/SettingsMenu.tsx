'use client';

import { FC } from 'react';

import Menu from '@/app/_components/ui/Menu';

const items = [
  { slug: '', title: 'Personal Info' },
  { slug: '/profile', title: 'Profile' },
];

export interface SettingsMenuProps {
  basePathname?: string;
}

export const SettingsMenu: FC<SettingsMenuProps> = ({ basePathname = '' }) => (
  <Menu>
    {items.map(({ slug, title }) => (
      <Menu.Item key={slug} href={`${basePathname}${slug}`}>
        {title}
      </Menu.Item>
    ))}
  </Menu>
);
