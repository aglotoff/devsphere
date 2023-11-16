import { useRef } from 'react';
import { useOption } from 'react-aria';
import { ListState, Node } from 'react-stately';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export interface SelectOptionProps<T> {
  item: Node<T>;
  state: ListState<T>;
}

export function SelectOption<T>({ item, state }: SelectOptionProps<T>) {
  const ref = useRef(null);
  const { optionProps, isSelected, isFocused } = useOption(
    { key: item.key },
    state,
    ref
  );

  return (
    <li
      {...optionProps}
      ref={ref}
      className={classNames(
        'flex items-center text-xs leading-normal px-4 py-2 focus:outline-none',
        isSelected ? 'bg-orange-100' : isFocused && 'bg-neutral-100',
        isSelected ? 'text-orange-600 font-semibold' : 'text-stone-500'
      )}
    >
      {item.rendered}
      {isSelected && <FontAwesomeIcon icon={faCheck} className="ml-auto" />}
    </li>
  );
}
