import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("foods/rice")) {
    return NextResponse.redirect(new URL("/foods", request.url));
  }
}

export const config = {
  matcher: ['/foods/:path+']
}