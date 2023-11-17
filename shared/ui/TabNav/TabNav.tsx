import { FC, PropsWithChildren } from 'react';
import classNames from 'classnames';

import { TabNavItem } from './TabNavItem';
import { Container } from '../Container';

export interface TabNavProps {
  className?: string;
}

interface TabNavWithSubcomponents extends FC<PropsWithChildren<TabNavProps>> {
  Item: typeof TabNavItem;
}

export const TabNav: TabNavWithSubcomponents = ({ children, className }) => (
  <nav className={classNames(className, 'border-b border-b-neutral-200')}>
    <Container>
      <ul className="flex">{children}</ul>
    </Container>
  </nav>
);

TabNav.Item = TabNavItem;
