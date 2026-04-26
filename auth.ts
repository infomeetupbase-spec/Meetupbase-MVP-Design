import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prisma";
import authConfig from "./auth.config";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  debug: true,
  trustHost: true,
  ...authConfig,
  callbacks: {
    ...authConfig.callbacks,
    async jwt({ token, user, account }: any) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }: any) {
      console.log("Session Callback - Token:", token);
      if (session.user && token.id) {
        session.user.id = token.id;
        
        try {
          // Fetch additional user data from Prisma
          const dbUser = await prisma.user.findUnique({
            where: { id: token.id },
            select: { credits: true, youtubeStats: true },
          });

          if (dbUser) {
            session.user.credits = dbUser.credits;
            session.user.youtubeStats = dbUser.youtubeStats;
          }

          // Add access token from account if available
          const account = await prisma.account.findFirst({
            where: { userId: token.id, provider: "google" },
          });
          
          if (account) {
            session.user.accessToken = account.access_token;
          }
        } catch (error) {
          console.error("Prisma error in session callback:", error);
          // Don't crash the session if DB is down, just return what we have
        }
      }
      return session;
    },
  },
});
