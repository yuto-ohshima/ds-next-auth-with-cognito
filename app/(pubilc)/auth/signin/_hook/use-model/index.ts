import { useCallback, useState } from "react";

type SignIn = {
  kind: "SignIn";
};
type NewPasswordRequired = {
  kind: "NewPasswordRequired";
  email: string;
  session: string;
};
type Success = {
  kind: "Success";
};
type Model = SignIn | NewPasswordRequired | Success;

export const useModel = () => {
  const [model, setModel] = useState<Model>({
    kind: "SignIn",
  });
  const onChangeNewPasswordRequired = useCallback(
    (input: Omit<NewPasswordRequired, "kind">) => {
      if (model.kind !== "SignIn") {
        throw new Error("Invalid kind.");
      }

      if (input.session) {
        setModel({
          kind: "NewPasswordRequired",
          email: input.email,
          session: input.session,
        });
      } else {
        setModel({
          kind: "Success",
        });
      }
    },
    [model]
  );
  const onChangeSuccess = useCallback(() => {
    if (model.kind !== "NewPasswordRequired") {
      throw new Error("Invalid kind.");
    }

    setModel({
      kind: "Success",
    });
  }, [model]);

  return {
    model,
    onChangeNewPasswordRequired,
    onChangeSuccess,
  };
};
