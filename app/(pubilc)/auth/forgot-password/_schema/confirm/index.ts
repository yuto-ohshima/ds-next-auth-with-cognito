import { z } from "@/lib";

export const CONFIRM_SCHEMA = z.object({
  email: z
    .string()
    .email({ message: "メールアドレスの形式が正しくありません" }),
  confirmationCode: z.string(),
  newPassword: z.string().min(8, { message: "パスワードは最低8文字以上です" }),
});

export type ConfirmSchema = z.infer<typeof CONFIRM_SCHEMA>;
