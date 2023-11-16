import classNames from 'classnames';
import Image from 'next/image';
import { FC } from 'react';

export interface LogoProps {
  className?: string;
}

export const Logo: FC<LogoProps> = ({ className }) => (
  <div className={classNames('flex items-center', className)}>
    <Image src="/images/logo.svg" height={24} width={24} alt="" />
    <span className="ml-4 text-xl text-white font-semibold">DevSphere</span>
  </div>
);
