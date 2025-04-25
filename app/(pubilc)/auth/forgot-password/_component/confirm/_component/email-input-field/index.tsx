"use client";

import { FC } from "react";
import { InputField } from "@/component";

type Props = {
  value: string;
};

export const EmailInputField: FC<Props> = (props) => {
  return (
    <InputField
      id="email"
      readOnly
      type="email"
      autoComplete="username"
      label="メールアドレス"
      value={props.value}
    />
  );
};
