import classNames from 'classnames';
import { PropsWithChildren, ReactNode, forwardRef } from 'react';
import { useToggleState } from 'react-stately';
import { useCheckbox, AriaCheckboxProps, VisuallyHidden } from 'react-aria';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare, faSquareCheck } from '@fortawesome/free-regular-svg-icons';

import FormItem from '@/app/_components/ui/FormItem';
import { useObjectRef } from '@react-aria/utils';

export interface CheckboxProps extends AriaCheckboxProps {
  className?: string;
  errorMessage?: ReactNode;
}

export const Checkbox = forwardRef<
  HTMLInputElement,
  PropsWithChildren<CheckboxProps>
>(({ className, errorMessage, ...props }, ref) => {
  const inputRef = useObjectRef(ref);
  const { children } = props;

  const state = useToggleState(props);

  const { inputProps } = useCheckbox(props, state, inputRef);

  // const { isFocusVisible, focusProps } = useFocusRing();
  const isSelected = state.isSelected && !props.isIndeterminate;

  return (
    <FormItem className={className}>
      <label className="inline-flex text-sm leading-normal text-stone-500">
        <VisuallyHidden>
          <input
            type="checkbox"
            ref={ref}
            className="peer sr-only"
            {...inputProps}
          />
        </VisuallyHidden>

        {isSelected ? (
          <span
            className={classNames(
              'inline-block text-orange-400',
              errorMessage && 'text-red-500'
            )}
          >
            <FontAwesomeIcon icon={faSquareCheck} />
          </span>
        ) : (
          <span
            className={classNames(
              'inline-block',
              errorMessage && 'text-red-500'
            )}
          >
            <FontAwesomeIcon icon={faSquare} />
          </span>
        )}
        <span className="ml-2">{children}</span>
      </label>

      {errorMessage && <FormItem.Error>{errorMessage}</FormItem.Error>}
    </FormItem>
  );
});
Checkbox.displayName = 'Checkbox';
