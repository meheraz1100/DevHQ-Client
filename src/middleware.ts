import { NextRequest, NextResponse } from 'next/server';

const protectedRoutes = [
  '/dashboard',
  '/teams',
  '/projects',
];

const authRoutes = [
  '/login',
  '/register',
];

export function middleware(req: NextRequest) {
  const refreshToken =
    req.cookies.get('refreshToken')?.value;

  const { pathname } = req.nextUrl;

  const isProtected =
    protectedRoutes.some((route) =>
      pathname.startsWith(route),
    );

  const isAuth =
    authRoutes.some((route) =>
      pathname.startsWith(route),
    );

  if (isProtected && !refreshToken) {
    return NextResponse.redirect(
      new URL('/login', req.url),
    );
  }

  if (isAuth && refreshToken) {
    return NextResponse.redirect(
      new URL('/dashboard', req.url),
    );
  }

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