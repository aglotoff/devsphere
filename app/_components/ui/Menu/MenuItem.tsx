import { FC, MouseEventHandler, PropsWithChildren } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';

export interface MenuItemProps {
  className?: string;
  href?: string;
  onClick?: MouseEventHandler<HTMLElement>;
}

export const MenuItem: FC<PropsWithChildren<MenuItemProps>> = ({
  className,
  href,
  ...props
}) => {
  const pathname = usePathname();

  const linkClass = classNames(
    className,
    'block text-sm hover:bg-white w-full text-left',
    pathname === href
      ? 'text-orange-400 border-orange-400'
      : 'text-stone-500 border-transparent hover:text-orange-400'
  );

  return (
    <li className="border-b border-neutral-200 last:border-b-0">
      {href ? (
        <Link className={linkClass} href={href} {...props} />
      ) : (
        <button className={linkClass} {...props} />
      )}
    </li>
  );
};
