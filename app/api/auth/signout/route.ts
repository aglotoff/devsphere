import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST() {
  cookies().delete({
    name: 'token',
    httpOnly: true,
  });

  return NextResponse.json({});
}
