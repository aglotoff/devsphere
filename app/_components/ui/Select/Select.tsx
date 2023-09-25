import {
  PropsWithChildren,
  ForwardedRef,
  forwardRef,
  useCallback,
  useState,
  RefAttributes,
  ReactNode,
} from 'react';
import { Item, useSelectState } from 'react-stately';
import { AriaSelectProps, HiddenSelect, useSelect } from 'react-aria';
import { useObjectRef, useResizeObserver } from '@react-aria/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

import FormItem from '@/app/_components/ui/FormItem';

import { SelectTrigger } from './SelectTrigger';
import { SelectMenu } from './SelectMenu';
import { SelectPopover } from './SelectPopover';

export interface SelectProps<T> extends AriaSelectProps<T> {
  className?: string;
}

function SelectInner<T extends object>(
  props: PropsWithChildren<SelectProps<T>>,
  ref: ForwardedRef<HTMLButtonElement>
) {
  const { label, errorMessage, className } = props;

  const state = useSelectState(props);

  const triggerRef = useObjectRef(ref);

  const { labelProps, triggerProps, valueProps, menuProps, errorMessageProps } =
    useSelect(props, state, triggerRef);

  const [triggerWidth, setTriggerWidth] = useState<number | null>();

  const onResize = useCallback(() => {
    if (triggerRef.current != null) {
      setTriggerWidth(triggerRef.current.offsetWidth);
    }
  }, [triggerRef]);

  useResizeObserver({ ref: triggerRef, onResize });

  return (
    <FormItem className={className}>
      {label && <FormItem.Label {...labelProps}>{label}</FormItem.Label>}

      <HiddenSelect
        isDisabled={props.isDisabled}
        state={state}
        triggerRef={triggerRef}
        label={label}
        name={props.name}
      />
      <SelectTrigger {...triggerProps} error={!!errorMessage} ref={triggerRef}>
        <span
          {...valueProps}
          className={classNames(!state.selectedItem && 'text-neutral-300')}
        >
          {state.selectedItem
            ? state.selectedItem.rendered
            : props.placeholder ?? 'Select an item'}
        </span>
        <FontAwesomeIcon
          className="ml-auto"
          icon={state.isOpen ? faChevronUp : faChevronDown}
        />
      </SelectTrigger>
      {state.isOpen && (
        <SelectPopover
          state={state}
          triggerRef={triggerRef}
          triggerWidth={`${triggerWidth}px`}
          placement="bottom start"
        >
          <SelectMenu {...menuProps} state={state} />
        </SelectPopover>
      )}

      {errorMessage && (
        <FormItem.Error {...errorMessageProps}>{errorMessage}</FormItem.Error>
      )}
    </FormItem>
  );
}

const Select = forwardRef(SelectInner) as <T = object>(
  props: PropsWithChildren<SelectProps<T>> & RefAttributes<HTMLElement>
) => ReactNode;

const SelectNamespace = Object.assign(Select, { Item });

export { SelectNamespace as Select };
