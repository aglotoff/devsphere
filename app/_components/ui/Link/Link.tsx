import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { FC, HTMLProps } from 'react';
import classNames from 'classnames';

export type LinkColor = 'default' | 'primary';

export type LinkProps = NextLinkProps &
  Omit<HTMLProps<HTMLAnchorElement>, 'ref' | 'color'> & {
    color?: LinkColor;
  };

const getColorClassNames = (color?: LinkColor) => {
  switch (color) {
    case 'primary':
      return 'text-orange-400 hover:text-orange-500';
    default:
      return 'text-zinc-800 hover:text-zinc-900';
  }
};

export const Link: FC<LinkProps> = ({ className, color, ...props }) => (
  <NextLink
    className={classNames(
      className,
      getColorClassNames(color),
      'hover:underline'
    )}
    {...props}
  />
);
