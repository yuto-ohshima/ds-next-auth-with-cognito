"use client";

import { FC, FormEvent, useCallback, useState } from "react";
import { ConfirmSchema } from "../../_schema/confirm";
import { Auth } from "@/auth";
import {
  EmailInputField,
  ConfirmationCodeInputField,
  NewPasswordInputField,
  SubmitButton,
  PreviousButton,
} from "./_component";

type Props = {
  initContext: {
    email: string;
  };
  onPreviousCallback: () => void;
  onSubmitCallback: () => void;
};

export const Confirm: FC<Props> = (props) => {
  const [form, setForm] = useState<ConfirmSchema>({
    email: props.initContext.email,
    confirmationCode: "",
    newPassword: "",
  });
  const onChangeForm = useCallback(
    (key: keyof ConfirmSchema) => (value: string) => {
      setForm((prev) => ({ ...prev, [key]: value }));
    },
    []
  );

  const onSubmit = useCallback(
    (form: ConfirmSchema) => (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      Auth.Cognito.forgotPasswordConfirm(form)
        .then(() => {
          props.onSubmitCallback();
        })
        .catch((e) => {
          console.log("エラーが発生しました。", { e });
        });
    },
    [props]
  );

  return (
    <div className="flex flex-col gap-y-6 justify-center items-center">
      <h1 className="text-h3">Forgot password - Confirm.</h1>

      <form
        onSubmit={onSubmit(form)}
        className="flex flex-col gap-y-6 w-full max-w-96 justify-center"
      >
        <EmailInputField value={form.email} />

        <ConfirmationCodeInputField
          value={form.confirmationCode}
          onChangeCallback={onChangeForm("confirmationCode")}
        />

        <NewPasswordInputField
          value={form.newPassword}
          onChangeCallback={onChangeForm("newPassword")}
        />

        <div className="mx-auto flex gap-x-2 items-center">
          <PreviousButton onSubmitCallback={props.onPreviousCallback} />

          <SubmitButton form={form} />
        </div>
      </form>
    </div>
  );
};
