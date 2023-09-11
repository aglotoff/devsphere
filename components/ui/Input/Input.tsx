import classnames from 'classnames';
import { forwardRef, HTMLProps } from 'react';

import { useFormItemContext } from '@/components/ui/FormItem';

export type InputProps = HTMLProps<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    const { error } = useFormItemContext();

    return (
      <input
        ref={ref}
        className={classnames(
          className,
          error ? 'border-red-500' : 'border-neutral-200',
          'w-full appearance-none border rounded-sm px-5 py-2 text-xs leading-normal text-stone-500 focus:outline-none'
        )}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';
