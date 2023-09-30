import { useObjectRef } from '@react-aria/utils';
import { forwardRef } from 'react';
import { useButton, AriaButtonOptions } from 'react-aria';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

export interface UserMenuTriggerProps extends AriaButtonOptions<'button'> {
  firstName: string;
}

export const UserMenuTrigger = forwardRef<
  HTMLButtonElement,
  UserMenuTriggerProps
>(({ firstName, ...props }, ref) => {
  const triggerRef = useObjectRef(ref);

  const { buttonProps } = useButton(props, triggerRef);

  return (
    <button
      {...buttonProps}
      ref={triggerRef}
      className="ml-auto flex items-center h-full text-white text-sm py-2 px-3 rounded hover:bg-zinc-600 focus:outline-none"
    >
      <div className="w-10 h-10 bg-neutral-200 rounded-full"></div>
      <span className="ml-3">Hi, {firstName}</span>
      <FontAwesomeIcon className="ml-3 mt-1" icon={faAngleDown} />
    </button>
  );
});
UserMenuTrigger.displayName = 'UserMenuTrigger';
