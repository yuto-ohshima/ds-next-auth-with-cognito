import { cognitoClient, confirmForgotPasswordCommand } from "@/lib";

type Props = {
  email: string;
  confirmationCode: string;
  newPassword: string;
};

export const forgotPasswordConfirm = async (props: Props) => {
  return confirmForgotPasswordCommand(cognitoClient)({
    Username: props.email,
    ClientId: process.env.cognitoClientId!,
    ConfirmationCode: props.confirmationCode,
    Password: props.newPassword,
  });
};
