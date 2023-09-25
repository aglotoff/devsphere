import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';

import { auth } from '@/app/_lib/config/firebaseAdmin';
import { AuthUser } from '.';

const COOKIE_NAME = 'token';
const COOKIE_EXPIRES = 60 * 60 * 24 * 5 * 1000;

export const verifySessionCookie = async (cookies: ReadonlyRequestCookies) => {
  try {
    const token = cookies.get(COOKIE_NAME);
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

export const createSessionCookie = async (
  cookies: ReadonlyRequestCookies,
  idToken: string
) => {
  const value = await auth.createSessionCookie(idToken, {
    expiresIn: COOKIE_EXPIRES,
  });

  cookies.set({
    name: COOKIE_NAME,
    value,
    httpOnly: true,
    expires: Date.now() + COOKIE_EXPIRES,
  });

  return value;
};

export const destroySessionCookie = (cookies: ReadonlyRequestCookies) => {
  cookies.delete({
    name: COOKIE_NAME,
    httpOnly: true,
  });
};
