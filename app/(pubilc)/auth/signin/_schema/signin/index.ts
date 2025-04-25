import { z } from "@/lib";

export const SIGNIN_SCHEMA = z.object({
  email: z
    .string()
    .email({ message: "メールアドレスの形式が正しくありません" }),
  password: z.string().min(8, { message: "パスワードは最低8文字以上です" }),
  session: z.string().optional(),
});
export type SigninSchema = z.infer<typeof SIGNIN_SCHEMA>;
