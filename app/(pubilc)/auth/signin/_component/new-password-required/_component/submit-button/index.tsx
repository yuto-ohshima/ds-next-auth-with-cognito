"use client";

import { FC, useMemo } from "react";
import { Button } from "@/component";
import {
  NEW_PASSWORD_REQUIRED_SCHEMA,
  NewPasswordRequiredSchema,
} from "../../../../_schema";

type Props = {
  form: NewPasswordRequiredSchema;
};

export const SubmitButton: FC<Props> = (props) => {
  const disabled = useMemo(() => {
    const result = NEW_PASSWORD_REQUIRED_SCHEMA.safeParse(props.form);

    return !result.success;
  }, [props.form]);

  return (
    <Button kind="primary" type="submit" disabled={disabled}>
      変更
    </Button>
  );
};
