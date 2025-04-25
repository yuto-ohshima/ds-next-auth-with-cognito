"use client";

import { FC } from "react";
import { useModel } from "./_hook";
import { Confirm, Initiate, Success } from "./_component";

export const BodyClient: FC = () => {
  const { model, onInitiate, onConfirm, onSuccess } = useModel();

  switch (model.kind) {
    case "Initiate":
      return <Initiate onSubmitCallback={onConfirm} />;
    case "Confirm":
      return (
        <Confirm
          initContext={{
            email: model.email,
          }}
          onPreviousCallback={onInitiate}
          onSubmitCallback={onSuccess}
        />
      );
    case "Success":
      return <Success />;
    default:
      throw new Error("Invalid state.");
  }
};
