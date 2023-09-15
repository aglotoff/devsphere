import { FC, PropsWithChildren } from 'react';
import Link, { LinkProps } from 'next/link';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';

export interface MenuItemProps extends LinkProps {
  className?: string;
}

export const MenuItem: FC<PropsWithChildren<MenuItemProps>> = ({
  className,
  href,
  ...props
}) => {
  const pathname = usePathname();

  return (
    <li className="border-b border-neutral-200 last:border-b-0">
      <Link
        className={classNames(
          className,
          'block py-5 px-6 text-sm ',
          pathname === href
            ? 'text-orange-400 border-r-4 border-r-orange-400'
            : 'text-stone-500 hover:text-orange-400'
        )}
        href={href}
        {...props}
      />
    </li>
  );
};
