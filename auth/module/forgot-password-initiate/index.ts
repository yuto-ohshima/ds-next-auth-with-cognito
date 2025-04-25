import { cognitoClient, forgotPasswordCommand } from "@/lib";

type Props = {
  email: string;
};

export const forgotPasswordInitiate = async (props: Props) => {
  return forgotPasswordCommand(cognitoClient)({
    Username: props.email,
    ClientId: process.env.cognitoClientId!,
  });
};
