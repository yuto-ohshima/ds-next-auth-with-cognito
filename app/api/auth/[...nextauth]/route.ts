import { Auth } from "@/auth";
import { nextAuth } from "@/lib";

const handlers = nextAuth(Auth.NextAuth.authOptions);

export const GET = handlers;
export const POST = handlers;

declare module "next-auth" {
  interface Session {
    user: undefined;
    expires: undefined;
    accessToken: string;
    error?: "RefreshTokenExpired";
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
    expiresAt: number; // 有効期限（秒）
    error?: "RefreshTokenExpired";
  }
}
