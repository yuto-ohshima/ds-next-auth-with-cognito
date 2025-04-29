import { cognitoClient, respondToAuthChallengeCommand } from "@/lib";

type Props = {
  email: string;
  newPassword: string;
  session: string;
};

export const newChangePassword = async (props: Props) => {
  return respondToAuthChallengeCommand(cognitoClient)({
    ChallengeName: "NEW_PASSWORD_REQUIRED",
    ChallengeResponses: {
      NEW_PASSWORD: props.newPassword,
      USERNAME: props.email,
    },
    Session: props.session,
    ClientId: process.env.cognitoClientId!,
  });
};
