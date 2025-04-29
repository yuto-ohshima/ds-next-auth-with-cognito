"use client";

import { FC, FormEvent, useCallback, useState } from "react";
import { signIn } from "@/lib";
import {
  SubmitButton,
  ForgotLink,
  PasswordInputField,
  EmailInputField,
} from "./component";
import { NewPasswordRequiredSchema, SigninSchema } from "../../_schema";
import { Auth } from "@/auth";

type Props = {
  onSubmitCallback: (form: NewPasswordRequiredSchema) => void;
};

export const Signin: FC<Props> = (props) => {
  const [form, setForm] = useState<SigninSchema>({
    email: "",
    password: "",
  });
  const onChangeSigninForm = useCallback(
    (key: keyof SigninSchema) => (value: string) => {
      setForm((prev) => ({ ...prev, [key]: value }));
    },
    []
  );

  const onSubmit = useCallback(
    (form: SigninSchema) => (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      signIn(Auth.NextAuth.CognitoProviderId, {
        email: form.email,
        password: form.password,
        redirect: false,
      })
        .then((res) => {
          if (!res || !res.ok) {
            throw new Error("エラーが発生しました。");
          }

          if (res.error) {
            const parsed = JSON.parse(res.error ?? "") as { session: string };
            props.onSubmitCallback({ ...form, session: parsed.session });
          } else {
            props.onSubmitCallback({ ...form, session: "" });
          }
        })
        .catch((e) => {
          console.error("エラーが発生しました。", e);
        });
    },
    [props]
  );

  return (
    <div className="flex flex-col gap-y-6 justify-center items-center">
      <h1 className="text-h1">Sign in.</h1>

      <form
        onSubmit={onSubmit(form)}
        className="flex flex-col gap-y-6 w-full max-w-96 justify-center"
      >
        <EmailInputField
          value={form.email}
          onChangeCallback={onChangeSigninForm("email")}
        />

        <PasswordInputField
          value={form.password}
          onChangeCallback={onChangeSigninForm("password")}
        />

        <div className="mx-auto">
          <SubmitButton form={form} />
        </div>

        <div className="text-right">
          <ForgotLink />
        </div>
      </form>
    </div>
  );
};
