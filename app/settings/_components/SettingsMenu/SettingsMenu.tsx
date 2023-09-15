'use client';

import { FC } from 'react';

import Menu from '@/components/ui/Menu';

const items = [
  { slug: '', title: 'Personal Info' },
  { slug: '/profile', title: 'Profile' },
];

export const SettingsMenu: FC = () => (
  <Menu>
    {items.map(({ slug, title }) => (
      <Menu.Item key={slug} href={`/settings${slug}`}>
        {title}
      </Menu.Item>
    ))}
  </Menu>
);
