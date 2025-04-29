import { Auth } from "@/auth";
import { JWT } from "next-auth/jwt";
import { convertToken } from "../convert-token";

type Props = {
  refreshToken: string;
};

export const tokenRefresh = async (props: Props): Promise<JWT> => {
  const result = await Auth.Cognito.refreshToken({
    refreshToken: props.refreshToken,
  });
  if (result.AuthenticationResult) {
    return convertToken({
      accessToken: result.AuthenticationResult.AccessToken ?? "",
      refreshToken: result.AuthenticationResult.RefreshToken ?? "",
      expiresIn: result.AuthenticationResult.ExpiresIn ?? 0,
    });
  }

  return {
    accessToken: "",
    refreshToken: "",
    expiresAt: 0,
    error: "RefreshTokenExpired",
  };
};
