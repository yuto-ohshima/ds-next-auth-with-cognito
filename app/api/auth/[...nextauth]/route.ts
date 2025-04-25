import {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from "next";
import { Auth } from "@/auth";
import { AuthOptions, getServerSession, nextAuth } from "@/lib";
import { CognitoProvider, CognitoProviderId } from "./_provider";

const authOptions: AuthOptions = {
  debug: !!process.env.authDebug,
  providers: [CognitoProvider],
  secret: process.env.authSecret,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
    signOut: "/auth/signout",
    newUser: "/auth/signup",
  },
  callbacks: {
    signIn({ user }) {
      switch (user.kind) {
        case "SignInSuccess":
          return true;
        case "NewPasswordRequired":
          throw new Error(
            JSON.stringify({
              code: "NEW_PASSWORD_REQUIRED",
              session: user.session,
            })
          );
        default:
          return false;
      }
    },

    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken ?? "";
        token.refreshToken = user.refreshToken ?? "";
        token.expiresIn = user.expiresIn ?? 0;
      }

      const shouldRefresh = Auth.computeShouldRefresh({
        expiresIn: token.expiresIn,
      });
      if (shouldRefresh) {
        await Auth.refreshToken({ refreshToken: token.refreshToken! })
          .then((result) => {
            if (result.AuthenticationResult) {
              token.accessToken = result.AuthenticationResult.AccessToken ?? "";
              token.refreshToken =
                result.AuthenticationResult.RefreshToken ?? "";
              token.expiresIn =
                (result.AuthenticationResult.ExpiresIn ?? 0) + Date.now();
            }
          })
          .catch(async () => {
            await Auth.signOut({ accessToken: token.accessToken });
          });
      }

      return {
        accessToken: token.accessToken,
        refreshToken: token.refreshToken,
        expiresIn: token.expiresIn,
      };
    },

    session({ session, token }) {
      if (token.accessToken) {
        session.accessToken = token.accessToken;
      }

      return session;
    },
  },
  events: {
    async signOut({ token }) {
      await Auth.signOut({ accessToken: token.accessToken });
    },
  },
};

const handlers = nextAuth(authOptions);

function auth(
  ...args:
    | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  return getServerSession(...args, authOptions);
}

export { handlers as GET, handlers as POST, auth, CognitoProviderId };

declare module "next-auth" {
  interface Session {
    user: undefined;
    expires: undefined;
    accessToken: string;
  }
  interface User {
    kind: "SignInSuccess" | "NewPasswordRequired";
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
    session?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
  }
}
