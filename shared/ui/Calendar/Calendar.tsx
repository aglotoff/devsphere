import { FC } from 'react';
import { useCalendar, useLocale, DateValue, CalendarProps } from 'react-aria';
import { useCalendarState } from 'react-stately';
import { createCalendar } from '@internationalized/date';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import { CalendarButton } from './CalendarButton';
import { CalendarGrid } from './CalendarGrid';

export const Calendar: FC<CalendarProps<DateValue>> = (props) => {
  const { locale } = useLocale();

  const state = useCalendarState({
    ...props,
    locale,
    createCalendar,
  });

  const { calendarProps, prevButtonProps, nextButtonProps, title } =
    useCalendar(props, state);

  return (
    <div {...calendarProps} className="calendar">
      <div className="flex items-center">
        <h2 className="mx-auto text-xs text-stone-500">{title}</h2>
        <CalendarButton className="order-first" {...prevButtonProps}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </CalendarButton>
        <CalendarButton className="order-last" {...nextButtonProps}>
          <FontAwesomeIcon icon={faChevronRight} />
        </CalendarButton>
      </div>
      <CalendarGrid state={state} />
    </div>
  );
};
