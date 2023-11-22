import classNames from 'classnames';
import { FC, useRef } from 'react';
import { AriaButtonProps, useButton } from 'react-aria';

export interface CalendarButtonProps extends AriaButtonProps {
  className?: string;
}

export const CalendarButton: FC<CalendarButtonProps> = ({
  className,
  ...props
}) => {
  const ref = useRef(null);
  const { buttonProps } = useButton(props, ref);
  return (
    <button
      className={classNames(
        className,
        'text-xs px-3 py-1.5 rounded text-stone-500 hover:bg-stone-50'
      )}
      {...buttonProps}
      ref={ref}
    >
      {props.children}
    </button>
  );
};
