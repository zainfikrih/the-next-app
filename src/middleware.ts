import { NextResponse } from "next/server";
import type { NextRequest } from 'next/server'

export default async function middleware(req: NextRequest) {
    const jwt = req.cookies.get("accessToken");
    const url = req.url;
    const { pathname } = req.nextUrl;

    if (pathname.startsWith("/home")) {
        if (jwt === undefined) {
            req.nextUrl.pathname = "/auth";
            return NextResponse.redirect(req.nextUrl);
        }
        return NextResponse.next();

        // try {
        //   return NextResponse.next();
        // } catch (error) {
        //   req.nextUrl.pathname = "/login";
        //   return NextResponse.redirect(req.nextUrl);
        // }
    }

    return NextResponse.next();
}