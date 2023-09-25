import { FC, PropsWithChildren } from 'react';
import classNames from 'classnames';

import { MenuItem } from './MenuItem';

export interface MenuProps {
  className?: string;
}

interface MenuWithSubcomponents extends FC<PropsWithChildren<MenuProps>> {
  Item: typeof MenuItem;
}

export const Menu: MenuWithSubcomponents = ({ children, className }) => (
  <ul className={classNames(className)}>{children}</ul>
);

Menu.Item = MenuItem;
