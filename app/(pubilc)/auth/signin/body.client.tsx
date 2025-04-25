"use client";

import { FC } from "react";
import { useModel } from "./_hook";
import { NewPasswordRequired, Signin, Success } from "./_component";

export const BodyClient: FC = () => {
  const { model, onChangeNewPasswordRequired, onChangeSuccess } = useModel();

  switch (model.kind) {
    case "SignIn":
      return <Signin onSubmitCallback={onChangeNewPasswordRequired} />;
    case "NewPasswordRequired":
      return (
        <NewPasswordRequired
          email={model.email}
          session={model.session}
          onSubmitCallback={onChangeSuccess}
        />
      );
    case "Success":
      return <Success />;
    default:
      throw new Error("Invalid model.");
  }
};
