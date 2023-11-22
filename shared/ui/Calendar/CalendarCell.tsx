import classNames from 'classnames';
import { FC, useRef } from 'react';
import { AriaCalendarCellProps, useCalendarCell } from 'react-aria';
import { CalendarState } from 'react-stately';

export interface CalendarCellProps extends AriaCalendarCellProps {
  state: CalendarState;
}

export const CalendarCell: FC<CalendarCellProps> = ({ state, date }) => {
  const ref = useRef(null);

  const {
    cellProps,
    buttonProps,
    isSelected,
    isOutsideVisibleRange,
    isDisabled,
    isUnavailable,
    formattedDate,
  } = useCalendarCell({ date }, state, ref);

  return (
    <td {...cellProps}>
      <div
        {...buttonProps}
        ref={ref}
        className={classNames(
          'text-center text-xs h-7 w-7 flex items-center justify-center hover:bg-neutral-200 rounded',
          (isDisabled || isOutsideVisibleRange || isUnavailable) &&
            'text-neutral-200 hover:bg-transparent',
          isSelected && 'bg-orange-400 text-white hover:bg-orange-400'
        )}
      >
        {formattedDate}
      </div>
    </td>
  );
};
