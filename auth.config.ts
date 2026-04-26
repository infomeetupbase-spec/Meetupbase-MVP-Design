import type { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

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
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (credentials?.email === "test@example.com" && credentials?.password === "password123") {
          return {
            id: "u1",
            name: "Collab User",
            email: "test@example.com",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Test",
          };
        }
        return null;
      }
    })
  ],
  pages: {
    signIn: "/login",
  },
  debug: true,
  trustHost: true,
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
