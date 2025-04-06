import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// List of pages that are currently disabled
const disabledPages = ['/network', '/events', '/insights', '/achievements'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the requested page is in the disabled list
  if (disabledPages.includes(pathname)) {
    // Redirect to home page
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/network', '/events', '/insights', '/achievements']
}; 