import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { FC, useRef } from 'react';
import { AriaButtonProps, useButton } from 'react-aria';

export const DatePickerButton: FC<AriaButtonProps> = (props) => {
  const ref = useRef(null);
  const { buttonProps } = useButton(props, ref);
  return (
    <button {...buttonProps} className="ml-auto px-4" ref={ref}>
      <FontAwesomeIcon icon={faCalendar} />
    </button>
  );
};
