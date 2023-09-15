import { FC, PropsWithChildren } from 'react';
import classNames from 'classnames';

import { CardHeader } from './CardHeader';
import { CardContent } from './CardContent';

export interface CardProps {
  className?: string;
}

interface CardWithSubcomponents extends FC<PropsWithChildren<CardProps>> {
  Header: typeof CardHeader;
  Content: typeof CardContent;
}

export const Card: CardWithSubcomponents = ({ children, className }) => (
  <div className={classNames(className, 'bg-white shadow-md')}>{children}</div>
);

Card.Header = CardHeader;
Card.Content = CardContent;
