import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';

import { AuthUser } from '@/app/_lib/auth';
import { auth } from '@/app/_lib/config/firebaseAdmin';

import { SESSION_COOKIE_NAME } from './config';

export const verifySessionCookie = async (cookies: ReadonlyRequestCookies) => {
  try {
    const token = cookies.get(SESSION_COOKIE_NAME);
    if (!token) return null;

    const res = await auth.verifySessionCookie(token.value);

    return {
      uid: res.uid,
      email: res.email!,
      displayName: 'Unknown',
    } as AuthUser;
  } catch (err) {
    return null;
  }
};
