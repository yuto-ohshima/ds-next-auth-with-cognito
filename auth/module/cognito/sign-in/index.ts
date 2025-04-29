import { cognitoClient, initiateAuthCommand } from "@/lib";

type Props = {
  email: string;
  password: string;
};

export const signIn = async (props: Props) => {
  return initiateAuthCommand(cognitoClient)({
    AuthFlow: "USER_PASSWORD_AUTH",
    ClientId: process.env.cognitoClientId!,
    AuthParameters: {
      USERNAME: props.email,
      PASSWORD: props.password,
    },
  });
};
