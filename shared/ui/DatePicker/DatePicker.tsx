import { forwardRef } from 'react';
import { AriaDatePickerProps, DateValue, useDatePicker } from 'react-aria';
import { useDatePickerState } from 'react-stately';

import { Calendar } from '../Calendar';
import { FormItem } from '../FormItem';

import { DatePickerButton } from './DatePickerButton';
import { DatePickerField } from './DatePickerField';
import { DatePickerDialog } from './DatePickerDialog';
import { DatePickerPopover } from './DatePickerPopover';
import classNames from 'classnames';
import { useObjectRef } from '@react-aria/utils';

export interface DatePickerProps extends AriaDatePickerProps<DateValue> {
  className?: string;
}

export const DatePicker = forwardRef<HTMLDivElement, DatePickerProps>(
  ({ className, errorMessage, label, ...props }, ref) => {
    const state = useDatePickerState(props);

    const inputRef = useObjectRef(ref);

    const {
      groupProps,
      fieldProps,
      dialogProps,
      buttonProps,
      calendarProps,
      labelProps,
      errorMessageProps,
    } = useDatePicker(props, state, inputRef);

    return (
      <FormItem className={className}>
        {label && <FormItem.Label {...labelProps}>{label}</FormItem.Label>}

        <div
          {...groupProps}
          ref={inputRef}
          tabIndex={-1}
          className={classNames(
            errorMessage ? 'border-red-500' : 'border-neutral-200',
            'flex w-full border rounded-sm text-xs leading-normal text-stone-500'
          )}
        >
          <DatePickerField {...fieldProps} />
          <DatePickerButton {...buttonProps} />
        </div>

        {state.isOpen && (
          <DatePickerPopover
            state={state}
            triggerRef={inputRef}
            placement="bottom start"
          >
            <DatePickerDialog {...dialogProps}>
              <Calendar {...calendarProps} />
            </DatePickerDialog>
          </DatePickerPopover>
        )}

        {errorMessage && (
          <FormItem.Error {...errorMessageProps}>{errorMessage}</FormItem.Error>
        )}
      </FormItem>
    );
  }
);
DatePicker.displayName = 'DatePicker';
