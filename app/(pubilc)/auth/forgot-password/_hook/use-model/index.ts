import { useCallback, useState } from "react";

type Initiate = {
  kind: "Initiate";
};
type Confirm = {
  kind: "Confirm";
  email: string;
};
type Success = {
  kind: "Success";
};

export type Model = Initiate | Confirm | Success;

export const useModel = () => {
  const [model, setModel] = useState<Model>({
    kind: "Initiate",
  });
  const onInitiate = useCallback(() => {
    if (model.kind !== "Confirm") {
      throw new Error("Invalid state.");
    }

    setModel({
      kind: "Initiate",
    });
  }, [model.kind]);
  const onConfirm = useCallback(
    (email: string) => {
      if (model.kind !== "Initiate") {
        throw new Error("Invalid state.");
      }

      setModel({
        kind: "Confirm",
        email,
      });
    },
    [model.kind]
  );
  const onSuccess = useCallback(() => {
    if (model.kind !== "Confirm") {
      throw new Error("Invalid state.");
    }

    setModel({
      kind: "Success",
    });
  }, [model.kind]);

  return {
    model,
    onInitiate,
    onConfirm,
    onSuccess,
  };
};
