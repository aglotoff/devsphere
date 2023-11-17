import { FC, PropsWithChildren } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';

export interface TabNavItemProps {
  className?: string;
  href: string;
}

export const TabNavItem: FC<PropsWithChildren<TabNavItemProps>> = ({
  className,
  href,
  ...props
}) => {
  const pathname = usePathname();

  const linkClass = classNames(
    className,
    'block py-4 px-7 relative text-sm',
    pathname === href
      ? 'text-zinc-800 border border-neutral-200 border-b-0 font-medium after:block after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-1 after:bg-zinc-100'
      : 'text-stone-500 hover:text-orange-400'
  );

  return (
    <li>
      <Link className={linkClass} href={href} {...props} />
    </li>
  );
};
