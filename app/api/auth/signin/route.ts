import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

import { createSessionCookie } from './_lib/createSessionCookie';

export async function POST(request: Request) {
  const body = await request.json();
  const { token } = body;

  try {
    await createSessionCookie(cookies(), token);
    return NextResponse.json({ message: 'OK' });
  } catch (error) {
    return NextResponse.json({ message: String(error) }, { status: 403 });
  }
}
