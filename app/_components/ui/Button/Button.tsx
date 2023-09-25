import classNames from 'classnames';
import { FC, PropsWithChildren, ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export interface ButtonProps {
  disabled?: boolean;
  className?: string;
  icon?: ReactElement;
  loading?: boolean;
  type?: 'submit' | 'button';
  onClick?: () => void;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  className,
  disabled,
  icon,
  loading,
  onClick,
  type,
}) => (
  <button
    className={classNames(
      className,
      'bg-orange-400 hover:bg-orange-500 inline-flex justify-center items-center space-x-2 rounded text-white text-sm leading-normal px-7 py-3 focus:outline-none focus:shadow-outline disabled:bg-orange-300 disabled:cursor-not-allowed'
    )}
    disabled={disabled ?? loading}
    type={type}
    onClick={onClick}
  >
    {!loading && icon}
    {loading && <FontAwesomeIcon icon={faSpinner} className="animate-spin" />}

    <span>{children}</span>
  </button>
);
