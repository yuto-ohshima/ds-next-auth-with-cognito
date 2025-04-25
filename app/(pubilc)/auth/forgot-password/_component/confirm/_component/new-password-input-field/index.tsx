"use client";

import { ChangeEvent, FC, useCallback, useMemo, useRef } from "react";
import { InputField } from "@/component";
import { CONFIRM_SCHEMA } from "../../../../_schema";

const SCHEMA = CONFIRM_SCHEMA.pick({ newPassword: true });

type Props = {
  value: string;
  onChangeCallback: (input: string) => void;
};

export const NewPasswordInputField: FC<Props> = (props) => {
  const initializedRef = useRef(false);

  const handleChangeValue = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      props.onChangeCallback(event.target.value);

      if (!initializedRef.current) {
        initializedRef.current = true;
      }
    },
    [props]
  );

  const errorMessage = useMemo(() => {
    if (!initializedRef.current) {
      return "";
    }

    const result = SCHEMA.safeParse({ newPassword: props.value });
    return !result.success ? result.error.errors.at(0)?.message : undefined;
  }, [props.value]);

  return (
    <InputField
      id="new-password"
      type="password"
      label="新しいパスワード"
      autoComplete="new-password"
      value={props.value}
      helperText={errorMessage}
      onChange={handleChangeValue}
    />
  );
};
