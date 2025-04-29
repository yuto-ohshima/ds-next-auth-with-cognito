import { User } from "next-auth";

type Props = {
  email: string;
  accessToken?: string;
  idToken?: string;
  refreshToken?: string;
  expiresIn?: number;
  session?: string;
};

export const convertUser = (props: Props): User => {
  if (props.session) {
    return {
      id: props.email,
      kind: "NewPasswordRequired",
      session: props.session,
      accessToken: "",
      refreshToken: "",
      expiresIn: 0,
    };
  }

  return {
    id: props.email,
    kind: "SignInSuccess",
    accessToken: props.accessToken ?? "",
    refreshToken: props.refreshToken ?? "",
    expiresIn: props.expiresIn ?? 0,
  };
};
