import { z } from "@/lib";

export const CHANGE_PASSWORD_FORM_SCHEMA = z.object({
  accessToken: z.string(),
  oldPassword: z.string().min(8, { message: "パスワードは最低8文字以上です" }),
  newPassword: z.string().min(8, { message: "パスワードは最低8文字以上です" }),
});
export type ChangePasswordFormSchema = z.infer<
  typeof CHANGE_PASSWORD_FORM_SCHEMA
>;
