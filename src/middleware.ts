import createIntlMiddleware from "next-intl/middleware";
import { locales, pathnames } from "./navigation";
import { NextRequest } from "next/server";
import { withAuth } from "next-auth/middleware";

const publicPages = [
  "/login",
  // (/secret requires auth)
];

const intlMiddleware = createIntlMiddleware({
  locales,
  pathnames,
  defaultLocale: "en",
});

const authMiddleware = withAuth(
  // Note that this callback is only invoked if
  // the `authorized` callback has returned `true`
  // and not for pages listed in `pages`.
  (req) => intlMiddleware(req),
  {
    callbacks: {
      authorized: ({ token }) => token != null,
    },
    /*   pages: {
      signIn: "/login",
    },*/
  }
);

export default function middleware(req: NextRequest) {
  const publicPathnameRegex = RegExp(
    `^(/(${locales.join("|")}))?(${publicPages.join("|")})?/?$`,
    "i"
  );
  const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname);
    console.log("isPublicPage", isPublicPage);
    
  if (isPublicPage) {
    return intlMiddleware(req);
  } else {
    return (authMiddleware as any)(req);
  }
}

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ["/((?!_next|.*\\..*).*)"],
};
