'use client';

import { createContext, useContext } from 'react';

import { AuthUser } from '../types';

export const AuthContext = createContext<AuthUser | null>(null);

export const useAuth = () => useContext(AuthContext);
