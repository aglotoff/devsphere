import { FC, PropsWithChildren } from 'react';
import classNames from 'classnames';

export interface ContainerProps {
  className?: string;
}

export const Container: FC<PropsWithChildren<ContainerProps>> = ({
  children,
  className,
}) => (
  <div className={classNames(className, 'mx-auto max-w-7xl px-12')}>
    {children}
  </div>
);
