import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const getUserRole = (req: NextRequest): string | null => {
  const role = req.cookies.get("user_role")?.value; 
  return role || null;
};

const PUBLIC_ROUTES = ["/login", ];

// Middleware principal
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const userRole = getUserRole(req);

  if (PUBLIC_ROUTES.includes(pathname)) {
    return NextResponse.next();
  }

  // if not logged in, redirect to login page
  if (!userRole) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

// Apply middleware only in the necessary routes
export const config = {
  matcher: ["/",], 
};
