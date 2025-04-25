import { CognitoIdentityProviderClient, RespondToAuthChallengeCommand, RespondToAuthChallengeCommandInput } from "@aws-sdk/client-cognito-identity-provider";

/**
 * 認証チャレンジに応答
 * @param client 
 * @returns 
 */
export const respondToAuthChallengeCommand = (client: CognitoIdentityProviderClient) => (input: RespondToAuthChallengeCommandInput) => {
  return client.send(new RespondToAuthChallengeCommand(input))
};

export type { RespondToAuthChallengeCommandInput };