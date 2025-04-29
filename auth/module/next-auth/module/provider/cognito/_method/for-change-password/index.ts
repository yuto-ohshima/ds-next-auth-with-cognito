import { User } from "next-auth";
import { convertUser } from "../_convert-user";
import { Cognito } from "@/auth/module";

type Props = {
  email: string;
  newPassword: string;
  session: string;
};

export const forChangePassword = async (props: Props): Promise<User | null> => {
  const result = await Cognito.newChangePassword({
    email: props.email,
    newPassword: props.newPassword,
    session: props.session,
  });

  if (!result.AuthenticationResult) {
    return null;
  }

  return convertUser({
    email: props.email,
    accessToken: result.AuthenticationResult.AccessToken ?? "",
    idToken: result.AuthenticationResult.IdToken ?? "",
    refreshToken: result.AuthenticationResult.RefreshToken ?? "",
  });
};
