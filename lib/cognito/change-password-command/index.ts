import {
  CognitoIdentityProviderClient,
  ChangePasswordCommand,
  ChangePasswordCommandInput,
} from "@aws-sdk/client-cognito-identity-provider";

/**
 * パスワード変更のコマンド
 * @param client
 * @returns
 */
export const changePasswordCommand =
  (client: CognitoIdentityProviderClient) =>
  (input: ChangePasswordCommandInput) => {
    return client.send(new ChangePasswordCommand(input));
  };

export type { ChangePasswordCommandInput };
