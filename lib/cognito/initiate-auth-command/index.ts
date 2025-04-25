import {
  CognitoIdentityProviderClient,
  InitiateAuthCommand,
  InitiateAuthCommandInput,
  InitiateAuthCommandOutput,
} from "@aws-sdk/client-cognito-identity-provider";

/**
 * 認証
 * @param client
 * @returns
 */
export const initiateAuthCommand =
  (client: CognitoIdentityProviderClient) =>
  (input: InitiateAuthCommandInput) => {
    return client.send(new InitiateAuthCommand(input));
  };

export type { InitiateAuthCommandInput, InitiateAuthCommandOutput };
