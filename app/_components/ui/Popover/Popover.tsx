import { FC, ReactNode, Ref, useRef, cloneElement, ReactElement } from 'react';
import {
  useOverlayTrigger,
  AriaButtonProps,
  AriaPopoverProps,
} from 'react-aria';
import { useOverlayTriggerState } from 'react-stately';

import { PopoverOverlay } from './PopoverOverlay';

export interface PopoverProps
  extends Omit<AriaPopoverProps, 'popoverRef' | 'triggerRef'> {
  content: ReactElement;
  children?: (
    props: AriaButtonProps<'button'> & { ref: Ref<HTMLButtonElement> }
  ) => ReactNode;
}

export const Popover: FC<PopoverProps> = ({ children, content, ...props }) => {
  const ref = useRef<HTMLButtonElement>(null);

  const state = useOverlayTriggerState({});

  const { triggerProps, overlayProps } = useOverlayTrigger(
    { type: 'dialog' },
    state,
    ref
  );

  return (
    <>
      {children && children({ ...triggerProps, ref })}
      {state.isOpen && (
        <PopoverOverlay {...props} triggerRef={ref} state={state}>
          {cloneElement(content, overlayProps)}
        </PopoverOverlay>
      )}
    </>
  );
};
