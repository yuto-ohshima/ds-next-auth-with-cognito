"use client";

import {
  ChangeEvent,
  ComponentProps,
  FC,
  useCallback,
  useMemo,
  useRef,
} from "react";
import { InputField } from "@/component";
import { CHANGE_PASSWORD_FORM_SCHEMA } from "../../_schema";

const SCHEMA = CHANGE_PASSWORD_FORM_SCHEMA.pick({ oldPassword: true });

type Props = {
  onChangeCallback: (input: string) => void;
} & Pick<ComponentProps<typeof InputField>, "value">;

export const OldPasswordInputField: FC<Props> = (props) => {
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

    const result = SCHEMA.safeParse({ oldPassword: props.value });
    return !result.success ? result.error.errors.at(0)?.message ?? "" : "";
  }, [props.value]);

  return (
    <InputField
      id="old-password"
      type="password"
      label="旧パスワード"
      autoComplete="current-password"
      helperText={errorMessage}
      onChange={handleChangeValue}
    />
  );
};
