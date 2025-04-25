import { useCallback, useMemo, useState } from "react";
import {
  CHANGE_PASSWORD_FORM_SCHEMA,
  ChangePasswordFormSchema,
} from "../../_schema";

type Props = {
  initContext: {
    accessToken: string;
  };
};

export const useForm = (props: Props) => {
  const [form, setForm] = useState<ChangePasswordFormSchema>({
    accessToken: props.initContext.accessToken,
    oldPassword: "",
    newPassword: "",
  });
  const onChangeForm = useCallback(
    (key: keyof ChangePasswordFormSchema) => (value: string) => {
      setForm((prev) => ({ ...prev, [key]: value }));
    },
    []
  );

  const oldPasswordErrorMessage = useMemo(() => {
    const result = CHANGE_PASSWORD_FORM_SCHEMA.pick({
      oldPassword: true,
    }).safeParse(form);

    return !result.success ? result.error.errors.at(0)?.message ?? "" : "";
  }, [form]);
  const newPasswordErrorMessage = useMemo(() => {
    const result = CHANGE_PASSWORD_FORM_SCHEMA.pick({
      newPassword: true,
    }).safeParse(form);

    return !result.success ? result.error.errors.at(0)?.message ?? "" : "";
  }, [form]);
  const disabled = useMemo(() => {
    const result = CHANGE_PASSWORD_FORM_SCHEMA.safeParse(form);

    return !result.success;
  }, [form]);

  return {
    form,
    onChangeForm,
    oldPasswordErrorMessage,
    newPasswordErrorMessage,
    disabled,
  };
};
