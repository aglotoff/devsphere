import { forwardRef } from 'react';
import { useListBox, AriaListBoxOptions } from 'react-aria';
import { ListState } from 'react-stately';
import { useObjectRef } from '@react-aria/utils';

import { SelectOption } from './SelectOption';

export interface SelectMenuProps<T> extends AriaListBoxOptions<T> {
  state: ListState<T>;
}

export const SelectMenu = forwardRef<
  HTMLUListElement,
  SelectMenuProps<unknown>
>(({ state, ...props }, ref) => {
  const listBoxRef = useObjectRef(ref);
  const { listBoxProps } = useListBox(props, state, listBoxRef);

  return (
    <ul {...listBoxProps} ref={listBoxRef} className="focus:outline-none">
      {[...state.collection].map((item) => (
        <SelectOption key={item.key} item={item} state={state} />
      ))}
    </ul>
  );
});
SelectMenu.displayName = 'SelectMenu';
