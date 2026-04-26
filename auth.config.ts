import type { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";

export default {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
      authorization: {
        params: {
          scope: "openid profile email https://www.googleapis.com/auth/youtube.readonly",
        },
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isApiAuthRoute = nextUrl.pathname.startsWith("/api/auth");
      const isPublicRoute = ["/", "/login", "/pricing", "/features"].includes(nextUrl.pathname);

      if (isApiAuthRoute) return true;

      if (!isLoggedIn && !isPublicRoute) {
        return false;
      }

      return true;
    },
  },
} satisfies NextAuthConfig;
