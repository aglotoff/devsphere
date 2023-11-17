import { FC } from 'react';

export interface ProfilePersonalInfoItemProps {
  title: string;
  text?: string;
}

export const ProfilePersonalInfoItem: FC<ProfilePersonalInfoItemProps> = ({
  title,
  text,
}) => (
  <div className="flex justify-between px-6 py-5 text-sm border-b border-neutral-200 last:border-b-0">
    <dt className="text-zinc-800 font-medium">{title}</dt>
    <dd className="text-stone-500">{text}</dd>
  </div>
);
