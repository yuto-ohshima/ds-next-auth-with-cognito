import { User } from "next-auth";
import { convertUser } from "../_convert-user";
import { Auth } from "@/auth";

type Props = {
  email: string;
  password: string;
};

export const forSignIn = async (props: Props): Promise<User | null> => {
  const result = await Auth.signIn({
    email: props.email,
    password: props.password,
  });

  if (result.ChallengeName === "NEW_PASSWORD_REQUIRED") {
    return convertUser({
      email: props.email,
      session: result.Session ?? "",
    });
  }

  if (!result.AuthenticationResult) {
    return null;
  }

  return convertUser({
    email: props.email,
    accessToken: result.AuthenticationResult.AccessToken ?? "",
    idToken: result.AuthenticationResult.IdToken ?? "",
    refreshToken: result.AuthenticationResult.RefreshToken ?? "",
    expiresIn: result.AuthenticationResult.ExpiresIn ?? 0,
  });
};
