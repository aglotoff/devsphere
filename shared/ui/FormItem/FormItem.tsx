import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';

import { FormItemError } from './FormItemError';
import { FormItemLabel } from './FormItemLabel';

export interface FormItemProps {
  className?: string;
}

const FormItem: FC<PropsWithChildren<FormItemProps>> = ({
  children,
  className,
}) => (
  <div
    className={classNames(className, 'relative flex flex-col items-start pb-4')}
  >
    {children}
  </div>
);

const FormItemNamespace = Object.assign(FormItem, {
  Error: FormItemError,
  Label: FormItemLabel,
});

export { FormItemNamespace as FormItem };
