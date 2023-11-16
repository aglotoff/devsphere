import { cookies } from 'next/headers';

import { auth } from '../api/firebase-admin';

type NextCookies = ReturnType<typeof cookies>;

const SESSION_COOKIE_NAME = 'token';
const SESSION_COOKIE_EXPIRES = 60 * 60 * 24 * 5 * 1000;

export const createSessionCookie = async (
  requestCookies: NextCookies,
  idToken: string
) => {
  const value = await auth.createSessionCookie(idToken, {
    expiresIn: SESSION_COOKIE_EXPIRES,
  });

  requestCookies.set({
    name: SESSION_COOKIE_NAME,
    value,
    httpOnly: true,
    expires: Date.now() + SESSION_COOKIE_EXPIRES,
  });

  return value;
};

export const verifySessionCookie = async (requestCookies: NextCookies) => {
  try {
    const token = requestCookies.get(SESSION_COOKIE_NAME);
    if (!token) return null;
    return auth.verifySessionCookie(token.value);
  } catch (err) {
    return null;
  }
};

export const destroySessionCookie = (requestCookies: NextCookies) => {
  requestCookies.delete({
    name: SESSION_COOKIE_NAME,
    httpOnly: true,
  });
};
