import { NextRequest, NextResponse } from 'next/server';

export function middleware(_req: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/teams/:path*',
    '/projects/:path*',
    '/login',
    '/register',
  ],
};