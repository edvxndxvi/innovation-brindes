import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const publicPaths = ['/login'];

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const token = request.cookies.get('token')?.value;
    const isPublicRoute = publicPaths.includes(pathname);
    const isProtectedRoute = request.nextUrl.pathname.startsWith('/produtos');

    if (isPublicRoute && token) {
        const loginUrl = new URL('/produtos', request.url);
        return NextResponse.redirect(loginUrl);
    }

    if (isPublicRoute) {
        return NextResponse.next();
    }

    if (isProtectedRoute && !token) {
        const loginUrl = new URL('/login', request.url);
        return NextResponse.redirect(loginUrl);
    }


    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
