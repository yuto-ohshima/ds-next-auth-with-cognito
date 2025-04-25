"use client";

import { FC, useMemo } from "react";
import { Button } from "@/component";
import { SIGNIN_SCHEMA, SigninSchema } from "../../../../_schema";

type Props = {
  form: SigninSchema;
};

export const SubmitButton: FC<Props> = (props) => {
  const disabled = useMemo(() => {
    const result = SIGNIN_SCHEMA.safeParse(props.form);

    return !result.success;
  }, [props.form]);

  return (
    <Button kind="primary" type="submit" disabled={disabled}>
      ログイン
    </Button>
  );
};
