"use client";

import { ChangeEvent, FC, useCallback, useMemo, useRef } from "react";
import { InputField } from "@/component";
import { INITIATE_SCHEMA } from "../../../../_schema";

const SCHEMA = INITIATE_SCHEMA.pick({ email: true });

type Props = {
  value: string;
  onChangeCallback: (input: string) => void;
};

export const EmailInputField: FC<Props> = (props) => {
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

    const result = SCHEMA.safeParse({ email: props.value });
    return !result.success ? result.error.errors.at(0)?.message : undefined;
  }, [props.value]);

  return (
    <InputField
      id="email"
      type="email"
      label="メールアドレス"
      helperText={errorMessage}
      onChange={handleChangeValue}
      value={props.value}
    />
  );
};
