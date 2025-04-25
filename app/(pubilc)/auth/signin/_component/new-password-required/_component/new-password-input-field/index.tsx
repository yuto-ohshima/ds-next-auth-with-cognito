"use client";

import { ChangeEvent, FC, useCallback, useMemo, useRef } from "react";
import { InputField } from "@/component";
import { NEW_PASSWORD_REQUIRED_SCHEMA } from "../../../../_schema";

const SCHEMA = NEW_PASSWORD_REQUIRED_SCHEMA.pick({ password: true });

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

    const result = SCHEMA.safeParse({
      password: props.value,
    });
    return !result.success ? result.error.errors.at(0)?.message ?? "" : "";
  }, [props.value]);

  return (
    <InputField
      id="new-password"
      type="password"
      autoComplete="new-password"
      label="新規パスワード"
      helperText={errorMessage}
      onChange={handleChangeValue}
    />
  );
};
