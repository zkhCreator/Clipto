import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@auth0/nextjs-auth0";

export async function middleware(req: NextRequest) {
  const response = NextResponse.next();

  // const session = await getSession(req, response);

  // console.log(session);

  // if (!session || !session.user) {
  //   return NextResponse.redirect(new URL("/api/auth/login", req.url));
  // }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/about',
}
