import { AuthOptions, getServerSession } from "@/lib";
import {
  convertToken,
  computeShouldRefresh,
  tokenRefresh,
  CognitoProviderId,
  CognitoProvider,
} from "./module";
import {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from "next";
import { Auth } from "@/auth";

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
      console.log("jwt: ", { token, user });

      if (user) {
        const convertedToken = convertToken({
          accessToken: user.accessToken,
          refreshToken: user.refreshToken,
          expiresIn: user.expiresIn,
        });
        return {
          ...token,
          accessToken: convertedToken.accessToken,
          refreshToken: convertedToken.refreshToken,
          expiresAt: convertedToken.expiresAt,
        };
      }

      console.log("jwt-before-computeShouldRefresh: ", { token });

      const shouldRefresh = computeShouldRefresh({
        expiresAt: token.expiresAt,
      });
      if (!shouldRefresh) {
        console.log("jwt-!shouldRefresh: ", { token });
        return {
          ...token,
          accessToken: token.accessToken,
          refreshToken: token.refreshToken,
          expiresAt: token.expiresAt,
        };
      }

      console.log("jwt-shouldRefresh: ", { token });
      const result = await tokenRefresh({ refreshToken: token.refreshToken });
      console.log("jwt-shouldRefresh-result: ", { result });
      return result;
    },

    session({ session, token }) {
      console.log("session: ", { session, token });

      if (token.accessToken) {
        session.accessToken = token.accessToken;
      }

      console.log("session-return: ", {
        user: undefined,
        expires: undefined,
        accessToken: token.accessToken,
      });
      return {
        user: undefined,
        expires: undefined,
        accessToken: token.accessToken,
      };
    },
  },

  events: {
    async signOut({ token }) {
      await Auth.Cognito.signOut({ accessToken: token.accessToken });
    },
  },
};

function auth(
  ...args:
    | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  return getServerSession(...args, authOptions);
}

export { auth, authOptions, CognitoProviderId };
