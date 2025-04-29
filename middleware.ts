import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|assets|favicon.ico|.*.png|.*\\..*|_next).*)",
  ],
};

export const middleware = async (req: NextRequest) => {
  const pathname = req.nextUrl.pathname;

  let response = NextResponse.next();

  const session = await getToken({ req, secret: process.env.authSecret });
  if (session?.accessToken) {
    if (session.error === "RefreshTokenExpired") {
      response = NextResponse.redirect(new URL("/auth/signin", req.url));
    }

    if (pathname.startsWith("/auth")) {
      response = NextResponse.redirect(new URL("/", req.url));
    }
  } else {
    if (
      !pathname.startsWith("/auth/signin") &&
      !pathname.startsWith("/auth/forgot-password")
    ) {
      response = NextResponse.redirect(new URL("/auth/signin", req.url));
    }
  }

  return response;
};
