import classnames from 'classnames';
import { forwardRef } from 'react';
import { AriaTextFieldProps, useTextField } from 'react-aria';

import FormItem from '@/components/ui/FormItem';
import { useObjectRef } from '@react-aria/utils';

export interface InputProps extends AriaTextFieldProps {
  className?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { className, label, errorMessage } = props;

  const inputRef = useObjectRef(ref);

  const { labelProps, inputProps, errorMessageProps } = useTextField(
    props,
    inputRef
  );

  return (
    <FormItem className={className}>
      {label && <FormItem.Label {...labelProps}>{label}</FormItem.Label>}
      <input
        ref={inputRef}
        className={classnames(
          errorMessage ? 'border-red-500' : 'border-neutral-200',
          'w-full appearance-none border rounded-sm px-4 py-2 text-xs leading-normal text-stone-500 focus:outline-none'
        )}
        {...inputProps}
      />

      {errorMessage && (
        <FormItem.Error {...errorMessageProps}>{errorMessage}</FormItem.Error>
      )}
    </FormItem>
  );
});
Input.displayName = 'Input';
