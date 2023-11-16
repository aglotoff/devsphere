import classNames from 'classnames';
import { HTMLProps, PropsWithChildren, forwardRef } from 'react';

export type FormItemErrorProps = HTMLProps<HTMLLabelElement>;

export const FormItemError = forwardRef<
  HTMLLabelElement,
  PropsWithChildren<FormItemErrorProps>
>(({ className, ...props }, ref) => (
  <small
    className={classNames(
      className,
      'absolute bottom-0 left-0 text-xs text-red-500 mt-1'
    )}
    ref={ref}
    {...props}
  />
));
FormItemError.displayName = 'FormItemError';
