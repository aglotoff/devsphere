import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

import { auth } from '@/lib/firebase/admin';

const EXPIRES_IN = 60 * 60 * 24 * 5 * 1000;

export async function POST(request: Request) {
  const body = await request.json();
  const { token } = body;

  try {
    const value = await auth.createSessionCookie(token, {
      expiresIn: EXPIRES_IN,
    });

    cookies().set({
      name: 'token',
      value,
      httpOnly: true,
      expires: Date.now() + EXPIRES_IN,
    });

    return NextResponse.json({});
  } catch (err) {
    return NextResponse.json({});
  }
}
