"use client";

import { FC, useMemo } from "react";
import { Button } from "@/component";
import { INITIATE_SCHEMA, InitiateSchema } from "../../../../_schema";

type Props = {
  form: InitiateSchema;
};

export const SubmitButton: FC<Props> = (props) => {
  const disabled = useMemo(() => {
    const result = INITIATE_SCHEMA.safeParse(props.form);
    return !result.success;
  }, [props.form]);

  return (
    <Button kind="primary" type="submit" disabled={disabled}>
      送信
    </Button>
  );
};
