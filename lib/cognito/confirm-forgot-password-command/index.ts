import {
  CognitoIdentityProviderClient,
  ConfirmForgotPasswordCommand,
  ConfirmForgotPasswordCommandInput,
} from "@aws-sdk/client-cognito-identity-provider";

/**
 * パスワードリセットの確認
 * @param client
 * @returns
 */
export const confirmForgotPasswordCommand =
  (client: CognitoIdentityProviderClient) =>
  (input: ConfirmForgotPasswordCommandInput) => {
    return client.send(new ConfirmForgotPasswordCommand(input));
  };

export type { ConfirmForgotPasswordCommandInput };
