import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';

import {
  SESSION_COOKIE_EXPIRES,
  SESSION_COOKIE_NAME,
} from '@/app/_lib/cookies';
import { auth } from '@/app/_lib/config/firebaseAdmin';

export const createSessionCookie = async (
  cookies: ReadonlyRequestCookies,
  idToken: string
) => {
  const value = await auth.createSessionCookie(idToken, {
    expiresIn: SESSION_COOKIE_EXPIRES,
  });

  cookies.set({
    name: SESSION_COOKIE_NAME,
    value,
    httpOnly: true,
    expires: Date.now() + SESSION_COOKIE_EXPIRES,
  });

  return value;
};
