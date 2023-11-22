import { DateFieldState, DateSegment, useDateFieldState } from 'react-stately';
import {
  AriaDateFieldProps,
  DateValue,
  useDateField,
  useDateSegment,
  useLocale,
} from 'react-aria';
import { FC, useRef } from 'react';
import { createCalendar } from '@internationalized/date';
import classNames from 'classnames';

interface DatePickerFieldSegmentProps {
  state: DateFieldState;
  segment: DateSegment;
}

const DatePickerFieldSegment: FC<DatePickerFieldSegmentProps> = ({
  segment,
  state,
}) => {
  const ref = useRef(null);
  const { segmentProps } = useDateSegment(segment, state, ref);

  return (
    <div
      {...segmentProps}
      ref={ref}
      className={classNames(
        segment.isEditable &&
          'focus:bg-orange-400 focus:text-white focus:outline-none px-0.5',
        'rounded-sm py-0.5'
      )}
    >
      {segment.text}
    </div>
  );
};

export interface DatePickerFieldProps extends AriaDateFieldProps<DateValue> {}

export const DatePickerField: FC<DatePickerFieldProps> = (props) => {
  const { locale } = useLocale();
  const state = useDateFieldState({
    ...props,
    locale,
    createCalendar,
  });

  const ref = useRef(null);
  const { labelProps, fieldProps } = useDateField(props, state, ref);

  return (
    <div className="flex pl-4 py-1.5">
      <span {...labelProps}>{props.label}</span>
      <div {...fieldProps} ref={ref} className="flex">
        {state.segments.map((segment, i) => (
          <DatePickerFieldSegment key={i} segment={segment} state={state} />
        ))}
        {state.isInvalid && <span aria-hidden="true">🚫</span>}
      </div>
    </div>
  );
};
