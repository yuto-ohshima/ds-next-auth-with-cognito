"use client";

import { FC, FormEvent, useCallback, useState } from "react";
import { InitiateSchema } from "../../_schema";
import { Auth } from "@/auth";
import { toast } from "@/lib";
import { CancelButton, EmailInputField, SubmitButton } from "./_component";

type Props = {
  onSubmitCallback: (email: string) => void;
};

export const Initiate: FC<Props> = (props) => {
  const [form, setForm] = useState<InitiateSchema>({
    email: "",
  });
  const onChangeForm = useCallback(
    (key: keyof InitiateSchema) => (value: string) => {
      setForm((prev) => ({ ...prev, [key]: value }));
    },
    []
  );

  const onSubmit = useCallback(
    (form: InitiateSchema) => (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      Auth.forgotPasswordInitiate(form)
        .then((result) => {
          console.log("result: ", { result });
          props.onSubmitCallback(form.email);
        })
        .catch((e) => {
          console.log("エラーが発生しました。", { e });
          toast.error("エラーが発生しました。再度お試しください", {
            position: "bottom-center",
            duration: 5000,
          });
        });
    },
    [props]
  );

  return (
    <div className="flex flex-col gap-y-6 justify-center items-center">
      <h1 className="text-h3">Forgot password - Initiate.</h1>

      <form
        onSubmit={onSubmit(form)}
        className="flex flex-col gap-y-6 w-full max-w-96 justify-center"
      >
        <EmailInputField
          value={form.email}
          onChangeCallback={onChangeForm("email")}
        />

        <div className="mx-auto flex gap-x-2 items-center">
          <CancelButton />

          <SubmitButton form={form} />
        </div>
      </form>
    </div>
  );
};
