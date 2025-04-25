import NextAuth, { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { signIn, signOut } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { getToken } from "next-auth/jwt";

export const nextAuth = (options: AuthOptions) => NextAuth(options);

export {
  Credentials,
  signIn,
  getServerSession,
  type AuthOptions,
  getToken,
  signOut,
};
