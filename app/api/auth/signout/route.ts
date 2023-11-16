import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

import { destroySessionCookie } from '@/shared/lib/session-cookies';

export function POST() {
  destroySessionCookie(cookies());
  return NextResponse.json({ message: 'OK' });
}
