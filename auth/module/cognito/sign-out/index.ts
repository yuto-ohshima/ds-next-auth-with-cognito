import { cognitoClient, globalSignOutCommand } from "@/lib";

type Props = {
  accessToken: string;
};

export const signOut = async (props: Props) => {
  return globalSignOutCommand(cognitoClient)({
    AccessToken: props.accessToken,
  });
};
