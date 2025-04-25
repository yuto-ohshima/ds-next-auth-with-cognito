"use client";

import { FC } from "react";

type Props = {
  id: string;
  text: string;
};

export const Label: FC<Props> = (props) => {
  return (
    <label
      htmlFor={props.id}
      className="text-small cursor-pointer leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      {props.text}
    </label>
  );
};
