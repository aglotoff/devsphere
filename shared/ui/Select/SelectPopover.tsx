import { FC, PropsWithChildren, useRef } from 'react';
import {
  DismissButton,
  Overlay,
  usePopover,
  AriaPopoverProps,
} from 'react-aria';
import { OverlayTriggerState } from 'react-stately';
import classNames from 'classnames';

export interface PopoverProps extends Omit<AriaPopoverProps, 'popoverRef'> {
  state: OverlayTriggerState;
  triggerWidth?: string;
}

export const SelectPopover: FC<PropsWithChildren<PopoverProps>> = ({
  children,
  state,
  triggerWidth,
  ...props
}) => {
  const popoverRef = useRef<HTMLDivElement>(null);

  const { popoverProps } = usePopover({ ...props, popoverRef }, state);

  return (
    <Overlay>
      <div
        {...popoverProps}
        ref={popoverRef as React.RefObject<HTMLDivElement>}
        className={classNames(
          'border rounded-sm shadow-md border-neutral-200 bg-white overflow-auto'
        )}
        style={{
          ...popoverProps.style,
          minWidth: triggerWidth,
        }}
      >
        {children}
        <DismissButton onDismiss={state.close} />
      </div>
    </Overlay>
  );
};
