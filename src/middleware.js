import { NextResponse, NextRequest } from "next/server";

export function middleware(request) {
  const url = request.nextUrl.clone();
  const cookieAuth = request.cookies.get("auth_web_dev")?.value;
  const path = request.nextUrl.pathname;

  console.log({ cookieAuth });

  if (
    path.startsWith("/_next") ||
    path.startsWith("/static") ||
    path.startsWith("/images") ||
    path === "/favicon.io"
  ) {
    return NextResponse.next();
  }
  const publicPaths = ["/", "/about", "/review", "/contact", "/login"];
  const publicPrefixes = ["/pricing", "/blogs"];

  // const isPublic = publicPaths.some(
  //   (publicPath) => path === publicPath || path === `${publicPath}/`
  // );
  const isExactMatch  = publicPaths.includes(path) || publicPaths.includes(path.replace(/\/$/, ""))
  const isPrefixMatch  = publicPaths.some(prefix => path.startsWith(prefix))

  const isPublic = isExactMatch || isPrefixMatch

  if (!cookieAuth  && !isPublic) {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  if (cookieAuth == "1" && !path.startsWith("/admin")) {
    url.pathname = "/admin";
    return NextResponse.redirect(url);
  }


  if(path.startsWith('/admin') && cookieAuth !== "1"){
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin"],
};
