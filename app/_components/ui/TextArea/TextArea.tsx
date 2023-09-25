import classnames from 'classnames';
import { forwardRef } from 'react';
import { AriaTextFieldProps, useTextField } from 'react-aria';

import FormItem from '@/app/_components/ui/FormItem';
import { useObjectRef } from '@react-aria/utils';

export interface TextAreaProps extends AriaTextFieldProps {
  className?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref) => {
    const { className, label, errorMessage } = props;

    const inputRef = useObjectRef(ref);

    const { labelProps, inputProps, errorMessageProps } = useTextField(
      { ...props, inputElementType: 'textarea' },
      inputRef
    );

    return (
      <FormItem className={className}>
        {label && <FormItem.Label {...labelProps}>{label}</FormItem.Label>}
        <textarea
          ref={inputRef}
          className={classnames(
            errorMessage ? 'border-red-500' : 'border-neutral-200',
            'w-full appearance-none border rounded-sm px-4 py-3 text-xs leading-normal text-stone-500 focus:outline-none'
          )}
          {...inputProps}
        />

        {errorMessage && (
          <FormItem.Error {...errorMessageProps}>{errorMessage}</FormItem.Error>
        )}
      </FormItem>
    );
  }
);
TextArea.displayName = 'TextArea';
