'use client';

import { FC, PropsWithChildren } from 'react';

import { ViewerContext, useViewerState } from '../../model';
import { Viewer } from '../../types';

export interface ViewerProviderProps {
  defaultUser: Viewer | null;
}

export const ViewerProvider: FC<PropsWithChildren<ViewerProviderProps>> = ({
  children,
  defaultUser,
}) => {
  const auth = useViewerState(defaultUser);
  return (
    <ViewerContext.Provider value={auth}>{children}</ViewerContext.Provider>
  );
};
