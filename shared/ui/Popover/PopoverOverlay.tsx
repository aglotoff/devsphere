import classNames from 'classnames';
import { FC, PropsWithChildren, useRef } from 'react';
import { DismissButton, Overlay, usePopover } from 'react-aria';
import type { AriaPopoverProps } from 'react-aria';
import type { OverlayTriggerState } from 'react-stately';

export interface PopoverOverlayProps
  extends Omit<AriaPopoverProps, 'popoverRef'> {
  children: React.ReactNode;
  state: OverlayTriggerState;
}

export const PopoverOverlay: FC<PropsWithChildren<PopoverOverlayProps>> = ({
  children,
  state,
  offset = 0,
  ...props
}) => {
  const popoverRef = useRef<HTMLDivElement>(null);

  const { popoverProps, underlayProps, arrowProps, placement } = usePopover(
    {
      ...props,
      offset,
      popoverRef,
    },
    state
  );

  return (
    <Overlay>
      <div {...underlayProps} className="underlay" />
      <div
        {...popoverProps}
        ref={popoverRef}
        className="bg-white w-44 shadow-md"
      >
        <svg
          {...arrowProps}
          style={{
            ...arrowProps.style,
            left: props.placement?.endsWith('start') ? '0.5rem' : 'auto',
            right: props.placement?.endsWith('end') ? '0.5rem' : 'auto',
          }}
          className={classNames(
            'absolute -z-10 w-5 data-[placement=bottom]:bottom-full data-[placement=bottom]:rotate-180 data-[placement=bottom]:translate-y-2/4'
          )}
          data-placement={placement}
          viewBox="0 0 20 20"
        >
          <path d="M0 0 L10 20 L20 0" fill="#ffffff" />
        </svg>
        <DismissButton onDismiss={state.close} />
        {children}
        <DismissButton onDismiss={state.close} />
      </div>
    </Overlay>
  );
};
