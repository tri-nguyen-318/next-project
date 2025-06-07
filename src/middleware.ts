import { NextRequest, NextResponse } from 'next/server';
import { getSession } from './lib/session';

export default async function middleware(req: NextRequest) {
  const session = await getSession();

  if (!session || !session.user) {
    // If the user is not authenticated, redirect to the sign-in page
    return NextResponse.redirect(new URL('/auth/signin', req.nextUrl));
  }

  NextResponse.next();
}

export const config = {
  matcher: ['/profile'],
};
