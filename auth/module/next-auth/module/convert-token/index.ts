import { JWT } from "next-auth/jwt";
import { getIat } from "../_get-iat";

type Props = {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
};

export const convertToken = (props: Props): JWT => {
  return {
    accessToken: props.accessToken,
    refreshToken: props.refreshToken,
    expiresAt: getIat() + props.expiresIn,
  };
};
