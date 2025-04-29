import { Credentials } from "@/lib";
import { forChangePassword, forSignIn } from "./_method";

export const CognitoProviderId = "cognito" as const;

export const CognitoProvider = Credentials({
  id: CognitoProviderId,
  name: "cognito",
  credentials: {
    email: { label: "email", type: "text" },
    password: { label: "password", type: "password" },
    newPassword: { label: "newPassword", type: "password", optional: true },
    session: { label: "session", type: "text", optional: true },
  },
  async authorize(credentials) {
    if (!credentials) {
      return null;
    }

    if (credentials.newPassword && credentials.session) {
      return forChangePassword({
        email: credentials.email,
        newPassword: credentials.newPassword,
        session: credentials.session,
      });
    }
    return forSignIn({
      email: credentials.email,
      password: credentials.password,
    });
  },
});
