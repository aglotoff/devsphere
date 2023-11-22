import { FC, useRef } from 'react';
import type { AriaDialogProps } from 'react-aria';
import { useDialog } from 'react-aria';

interface DatePickerDialogProps extends AriaDialogProps {
  title?: React.ReactNode;
  children: React.ReactNode;
}

export const DatePickerDialog: FC<DatePickerDialogProps> = ({
  title,
  children,
  ...props
}) => {
  const ref = useRef(null);
  const { dialogProps, titleProps } = useDialog(props, ref);

  return (
    <div {...dialogProps} ref={ref} className="p-3">
      {title && (
        <h3 {...titleProps} style={{ marginTop: 0 }}>
          {title}
        </h3>
      )}
      {children}
    </div>
  );
};
