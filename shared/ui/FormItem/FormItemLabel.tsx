import classNames from 'classnames';
import { HTMLProps, PropsWithChildren, forwardRef } from 'react';

export type FormItemLabelProps = HTMLProps<HTMLLabelElement>;

export const FormItemLabel = forwardRef<
  HTMLLabelElement,
  PropsWithChildren<FormItemLabelProps>
>(({ className, ...props }, ref) => (
  <label
    className={classNames(className, 'block text-sm font-semibold mb-2')}
    ref={ref}
    {...props}
  />
));
FormItemLabel.displayName = 'FormItemLabel';
