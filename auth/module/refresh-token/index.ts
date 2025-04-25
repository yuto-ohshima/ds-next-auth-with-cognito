import { cognitoClient, initiateAuthCommand } from "@/lib";

type Props = {
  refreshToken: string;
};

export const refreshToken = async (props: Props) => {
  return initiateAuthCommand(cognitoClient)({
    AuthFlow: "REFRESH_TOKEN_AUTH",
    ClientId: process.env.cognitoClientId!,
    AuthParameters: {
      REFRESH_TOKEN: props.refreshToken,
    },
  });
};
