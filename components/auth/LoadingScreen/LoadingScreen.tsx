import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export const LoadingScreen: FC = () => (
  <div className="flex items-center justify-center w-full h-screen">
    <div className="flex justify-center items-center space-x-2 text-sm text-gray-700">
      <FontAwesomeIcon icon={faSpinner} className="animate-spin" />

      <div>Loading ...</div>
    </div>
  </div>
);
