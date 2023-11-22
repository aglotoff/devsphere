'use client';

import { createContext, useContext } from 'react';

import { Viewer } from '../types';

export const ViewerContext = createContext<Viewer | null>(null);

export const useAuth = () => useContext(ViewerContext);
