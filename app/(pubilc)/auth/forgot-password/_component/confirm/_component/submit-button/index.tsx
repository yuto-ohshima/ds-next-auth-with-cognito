"use client";

import { FC, useMemo } from "react";
import { Button } from "@/component";
import { CONFIRM_SCHEMA, ConfirmSchema } from "../../../../_schema";

type Props = {
  form: ConfirmSchema;
};

export const SubmitButton: FC<Props> = (props) => {
  const disabled = useMemo(() => {
    const result = CONFIRM_SCHEMA.safeParse(props.form);
    return !result.success;
  }, [props.form]);

  return (
    <Button kind="primary" disabled={disabled} type="submit">
      再設定
    </Button>
  );
};
