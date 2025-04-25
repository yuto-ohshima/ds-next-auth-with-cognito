import {
  CognitoIdentityProviderClient,
  ForgotPasswordCommand,
  ForgotPasswordCommandInput,
} from "@aws-sdk/client-cognito-identity-provider";

/**
 * パスワード忘れたときのコマンド
 * @param client
 * @returns
 */
export const forgotPasswordCommand =
  (client: CognitoIdentityProviderClient) =>
  (input: ForgotPasswordCommandInput) => {
    return client.send(new ForgotPasswordCommand(input));
  };

export type { ForgotPasswordCommandInput };
