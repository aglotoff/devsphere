import classNames from 'classnames';
import { HTMLProps, ReactNode, forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare, faSquareCheck } from '@fortawesome/free-regular-svg-icons';

import { useFormItemContext } from '@/components/ui/FormItem';

export interface CheckboxProps
  extends Omit<HTMLProps<HTMLInputElement>, 'label'> {
  label?: ReactNode;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, id, label, ...props }, ref) => {
    const { error } = useFormItemContext();

    return (
      <label
        className={classNames(
          className,
          'inline-flex text-sm leading-normal text-stone-500'
        )}
        htmlFor={id}
      >
        <input type="checkbox" ref={ref} className="peer sr-only" {...props} />
        <span
          className={classNames(
            'inline-block peer-checked:hidden',
            error && 'text-red-500'
          )}
        >
          <FontAwesomeIcon icon={faSquare} />
        </span>
        <span
          className={classNames(
            'hidden peer-checked:inline-block text-orange-400',
            error && 'text-red-500'
          )}
        >
          <FontAwesomeIcon icon={faSquareCheck} />
        </span>
        <span className="ml-2">{label}</span>
      </label>
    );
  }
);
Checkbox.displayName = 'Checkbox';
