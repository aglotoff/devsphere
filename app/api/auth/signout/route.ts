import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

import { destroySessionCookie } from './_lib/destroySessionCookie';

export function POST() {
  destroySessionCookie(cookies());
  return NextResponse.json({ message: 'OK' });
}
