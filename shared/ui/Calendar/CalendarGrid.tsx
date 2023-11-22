import { FC } from 'react';
import { AriaCalendarGridProps, useCalendarGrid, useLocale } from 'react-aria';
import { CalendarState } from 'react-stately';
import { getWeeksInMonth } from '@internationalized/date';

import { CalendarCell } from './CalendarCell';

export interface CalendarGridProps extends AriaCalendarGridProps {
  state: CalendarState;
}

export const CalendarGrid: FC<CalendarGridProps> = ({ state, ...props }) => {
  const { locale } = useLocale();
  const { gridProps, headerProps, weekDays } = useCalendarGrid(props, state);

  // Get the number of weeks in the month so we can render the proper number of rows.
  const weeksInMonth = getWeeksInMonth(state.visibleRange.start, locale);

  return (
    <table {...gridProps}>
      <thead {...headerProps}>
        <tr>
          {weekDays.map((day, index) => (
            <th key={index} className="text-xs py-1.5 text-stone-500">
              {day}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {[...new Array(weeksInMonth).keys()].map((weekIndex) => (
          <tr key={weekIndex}>
            {state
              .getDatesInWeek(weekIndex)
              .map((date, i) =>
                date ? (
                  <CalendarCell key={i} state={state} date={date} />
                ) : (
                  <td key={i} />
                )
              )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
