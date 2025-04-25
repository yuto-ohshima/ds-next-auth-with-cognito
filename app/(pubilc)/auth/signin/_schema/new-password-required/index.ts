import { z } from "@/lib";

export const NEW_PASSWORD_REQUIRED_SCHEMA = z.object({
  session: z.string(),
  email: z
    .string()
    .email({ message: "メールアドレスの形式が正しくありません" }),
  password: z.string().min(8, { message: "パスワードは最低8文字以上です" }),
});
export type NewPasswordRequiredSchema = z.infer<
  typeof NEW_PASSWORD_REQUIRED_SCHEMA
>;
