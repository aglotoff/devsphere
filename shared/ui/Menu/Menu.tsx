import {
  FC,
  PropsWithChildren,
  Children,
  cloneElement,
  isValidElement,
} from 'react';
import classNames from 'classnames';

import { MenuItem, MenuItemProps } from './MenuItem';

export interface MenuProps {
  className?: string;
  size?: 'default' | 'large';
  activeBorder?: 'left' | 'right';
}

interface MenuWithSubcomponents extends FC<PropsWithChildren<MenuProps>> {
  Item: typeof MenuItem;
}

export const Menu: MenuWithSubcomponents = ({
  activeBorder = 'left',
  children,
  className,
  size = 'default',
}) => {
  const items = Children.toArray(children).map(
    (item) =>
      isValidElement<MenuItemProps>(item) &&
      cloneElement(item, {
        className: classNames({
          'px-5 py-2.5': size === 'default',
          'border-l-2': size === 'default' && activeBorder === 'left',
          'border-r-2': size === 'default' && activeBorder === 'right',
          'px-6 py-5': size === 'large',
          'border-l-4': size === 'large' && activeBorder === 'left',
          'border-r-4': size === 'large' && activeBorder === 'right',
        }),
      })
  );

  return <ul className={classNames(className)}>{items}</ul>;
};

Menu.Item = MenuItem;
