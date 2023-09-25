import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';

import { SESSION_COOKIE_NAME } from '@/app/_lib/cookies';

export const destroySessionCookie = (cookies: ReadonlyRequestCookies) => {
  cookies.delete({
    name: SESSION_COOKIE_NAME,
    httpOnly: true,
  });
};
