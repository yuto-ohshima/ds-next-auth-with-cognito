"use client";

import { FC, useMemo } from "react";
import { Button } from "@/component";
import {
  CHANGE_PASSWORD_FORM_SCHEMA,
  ChangePasswordFormSchema,
} from "../../_schema";

type Props = {
  form: ChangePasswordFormSchema;
};

export const SubmitButton: FC<Props> = (props) => {
  const disabled = useMemo(() => {
    const result = CHANGE_PASSWORD_FORM_SCHEMA.safeParse(props.form);
    return !result.success;
  }, [props.form]);

  return (
    <Button kind="primary" type="submit" disabled={disabled}>
      更新
    </Button>
  );
};
