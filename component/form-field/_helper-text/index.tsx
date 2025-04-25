"use client";

import { FC } from "react";

import { cn } from "@/lib";

type Props = {
  text?: string;
  disabled?: boolean;
  required?: boolean;
};

export const FormHelperText: FC<Props> = (props) => {
  if (!props.text) {
    return null;
  }

  return (
    <p
      className={cn(
        "text-subtle text-slate-500",
        props.disabled ? "opacity-50" : undefined
      )}
    >
      {props.text}
    </p>
  );
};
