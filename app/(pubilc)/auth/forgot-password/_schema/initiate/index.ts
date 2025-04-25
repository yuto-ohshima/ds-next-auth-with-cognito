import { z } from "@/lib";

export const INITIATE_SCHEMA = z.object({
  email: z
    .string()
    .email({ message: "メールアドレスの形式が正しくありません" }),
});

export type InitiateSchema = z.infer<typeof INITIATE_SCHEMA>;
