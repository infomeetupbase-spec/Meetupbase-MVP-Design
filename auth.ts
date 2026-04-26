import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import Google from "next-auth/providers/google";

const prisma = new PrismaClient();

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
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
  callbacks: {
    async session({ session, user, token }: any) {
      if (session.user) {
        session.user.id = user.id;
        
        // Fetch additional user data from Prisma
        const dbUser = await prisma.user.findUnique({
          where: { id: user.id },
          select: { credits: true, youtubeStats: true },
        });

        if (dbUser) {
          session.user.credits = dbUser.credits;
          session.user.youtubeStats = dbUser.youtubeStats;
        }

        // Add access token from account if available
        const account = await prisma.account.findFirst({
          where: { userId: user.id, provider: "google" },
        });
        
        if (account) {
          session.user.accessToken = account.access_token;
        }
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
});
