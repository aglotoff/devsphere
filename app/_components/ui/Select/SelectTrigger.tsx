import { forwardRef, PropsWithChildren } from 'react';
import { useButton, AriaButtonProps } from 'react-aria';
import { useObjectRef } from '@react-aria/utils';
import classNames from 'classnames';

export interface SelectTriggerProps extends AriaButtonProps {
  error?: boolean;
}

export const SelectTrigger = forwardRef<
  HTMLButtonElement,
  PropsWithChildren<SelectTriggerProps>
>(({ children, error, ...props }, ref) => {
  const buttonRef = useObjectRef(ref);

  const { buttonProps } = useButton(props, buttonRef);

  return (
    <button
      {...buttonProps}
      ref={ref}
      className={classNames(
        'text-start flex items-center w-full appearance-none border rounded-sm px-4 py-2 text-xs leading-normal text-stone-500 focus:outline-none',
        error ? 'border-red-500' : 'border-neutral-200'
      )}
    >
      {children}
    </button>
  );
});
SelectTrigger.displayName = 'SelectTrigger';
