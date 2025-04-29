import { changePasswordCommand, cognitoClient } from "@/lib";

type Props = {
  oldPassword: string;
  newPassword: string;
  accessToken: string;
};

export const changePassword = async (props: Props) => {
  return changePasswordCommand(cognitoClient)({
    PreviousPassword: props.oldPassword,
    ProposedPassword: props.newPassword,
    AccessToken: props.accessToken,
  });
};
