import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';

import { FormItemContext } from './FormItemContext';

export interface FormItemProps {
  className?: string;
  error?: string | null;
}

export const FormItem: FC<PropsWithChildren<FormItemProps>> = ({
  children,
  className,
  error,
}) => (
  <div className={classNames(className, 'relative pb-4')}>
    <FormItemContext.Provider value={{ error: !!error }}>
      {children}
    </FormItemContext.Provider>

    {error && (
      <div className="absolute bottom-0 left-0 text-xs text-red-500 mt-1">
        {error}
      </div>
    )}
  </div>
);
