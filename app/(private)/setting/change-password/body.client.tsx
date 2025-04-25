"use client";

import { FC, FormEvent, useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { Auth } from "@/auth";
import { ChangePasswordFormSchema } from "./_schema";
import {
  NewPasswordInputField,
  OldPasswordInputField,
  PreviousButton,
  SubmitButton,
} from "./_component";
import { toast } from "@/lib";

type Props = {
  initContext: {
    accessToken: string;
  };
};

export const BodyClient: FC<Props> = (props) => {
  const [form, setForm] = useState<ChangePasswordFormSchema>({
    accessToken: props.initContext.accessToken,
    oldPassword: "",
    newPassword: "",
  });
  const onChangeForm = useCallback(
    (key: keyof ChangePasswordFormSchema) => (value: string) => {
      setForm((prev) => ({ ...prev, [key]: value }));
    },
    []
  );

  const { push } = useRouter();
  const onSubmit = useCallback(
    (input: ChangePasswordFormSchema) => (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      Auth.changePassword({
        newPassword: input.newPassword,
        oldPassword: input.oldPassword,
        accessToken: input.accessToken,
      })
        .then(() => {
          toast.success("パスワードを変更しました。", {
            position: "bottom-center",
            duration: 5000,
          });
          push("/");
        })
        .catch((e) => {
          console.error("エラーが発生しました。", e);
          toast.error("エラーが発生しました。再度お試しください", {
            position: "bottom-center",
            duration: 5000,
          });
        });
    },
    [push]
  );

  return (
    <div className="flex flex-col gap-y-6 justify-center items-center">
      <h1 className="text-h1">Change password.</h1>

      <form
        onSubmit={onSubmit(form)}
        className="flex flex-col gap-y-6 w-full max-w-96 justify-center"
      >
        <OldPasswordInputField
          value={form.oldPassword}
          onChangeCallback={onChangeForm("oldPassword")}
        />

        <NewPasswordInputField
          value={form.newPassword}
          onChangeCallback={onChangeForm("newPassword")}
        />

        <div className="mx-auto flex gap-x-2 items-center">
          <PreviousButton />

          <SubmitButton
            form={form} //
            // onSubmitCallback={onSubmit(form)}
          />
        </div>
      </form>
    </div>
  );
};
