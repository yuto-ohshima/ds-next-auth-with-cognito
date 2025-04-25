import { CognitoIdentityProviderClient, GlobalSignOutCommand, GlobalSignOutCommandInput } from "@aws-sdk/client-cognito-identity-provider";

/**
 * ログアウト
 * @param client 
 * @returns 
 */
export const globalSignOutCommand = (client: CognitoIdentityProviderClient) => (input: GlobalSignOutCommandInput) => {
  return client.send(new GlobalSignOutCommand(input))
};

export type { GlobalSignOutCommandInput };