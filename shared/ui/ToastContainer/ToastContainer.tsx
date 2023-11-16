'use client';

import { FC, ReactNode } from 'react';
import { Toast, Toaster, resolveValue } from 'react-hot-toast';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSpinner,
  faCircleCheck,
  faCircleXmark,
  faCircleInfo,
} from '@fortawesome/free-solid-svg-icons';

const getColorClassNames = (t: Toast): string => {
  switch (t.type) {
    case 'success':
      return 'bg-green-100 text-green-700 border-green-200';
    case 'error':
      return 'bg-red-100 text-red-700 border-red-200';
    default:
      return 'bg-gray-100 border-gray-200 text-gray-600';
  }
};

const renderIcon = (t: Toast): ReactNode => {
  if (t.icon) {
    return t.icon;
  }

  switch (t.type) {
    case 'success':
      return <FontAwesomeIcon icon={faCircleCheck} />;
    case 'error':
      return <FontAwesomeIcon icon={faCircleXmark} />;
    case 'loading':
      return <FontAwesomeIcon icon={faSpinner} className="animate-spin" />;
    default:
      return <FontAwesomeIcon icon={faCircleInfo} />;
  }
};

export const ToastContainer: FC = () => (
  <Toaster>
    {(t) => (
      <div
        className={classNames(
          'border rounded flex items-center space-x-2  px-4 py-2 text-xs',
          getColorClassNames(t),
          t.visible ? 'opacity-100' : 'opacity-0'
        )}
      >
        {renderIcon(t)}
        <span>{resolveValue(t.message, t)}</span>
      </div>
    )}
  </Toaster>
);
