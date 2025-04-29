"use client";

import { FC, FormEvent, useCallback, useState } from "react";
import { toast, signIn } from "@/lib";
import { NewPasswordInputField, SubmitButton } from "./_component";
import { NewPasswordRequiredSchema } from "../../_schema";
import { Auth } from "@/auth";

type Props = {
  email: string;
  session: string;
  onSubmitCallback: () => void;
};

export const NewPasswordRequired: FC<Props> = (props) => {
  const [form, setForm] = useState<NewPasswordRequiredSchema>({
    password: "",
    email: props.email,
    session: props.session,
  });
  const onChangeForm = useCallback(
    (key: keyof NewPasswordRequiredSchema) => (value: string) => {
      setForm((prev) => ({ ...prev, [key]: value }));
    },
    []
  );

  const onSubmit = useCallback(
    (form: NewPasswordRequiredSchema) => (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      signIn(Auth.NextAuth.CognitoProviderId, {
        email: form.email,
        newPassword: form.password,
        redirect: false,
      })
        .then((res) => {
          if (!res || !res.ok || res.error) {
            throw new Error("エラーが発生しました。");
          }

          props.onSubmitCallback();
          toast.success("初期パスワードを変更しました", {
            position: "bottom-center",
            duration: 5000,
          });
        })
        .catch((e) => {
          console.error("エラーが発生しました。", e);
          toast.error(
            "初期パスワードの変更に失敗しました。再度お試しください",
            {
              position: "bottom-center",
              duration: 5000,
            }
          );
        });
    },
    [props]
  );

  return (
    <div className="flex flex-col gap-y-6 justify-center items-center">
      <h1 className="text-h3">New password required.</h1>

      <form
        onSubmit={onSubmit(form)}
        className="flex flex-col gap-y-6 w-full max-w-96 justify-center"
      >
        <NewPasswordInputField
          value={form.password}
          onChangeCallback={onChangeForm("password")}
        />

        <div className="mx-auto">
          <SubmitButton form={form} />
        </div>
      </form>
    </div>
  );
};
