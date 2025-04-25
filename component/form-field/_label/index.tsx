"use client";

import { FC } from "react";

import { Label } from "@/component/parts";
import { cn } from "@/lib";

import { RequiredLabel } from "./components";

type Props = {
  id?: string;
  text?: string;
  disabled?: boolean;
  required?: boolean;
};

export const FormLabel: FC<Props> = (props) => {
  if (!props.text) {
    return null;
  }

  return (
    <div
      className={cn(
        "flex gap-x-1.5",
        props.disabled ? "opacity-50" : undefined,
      )}
    >
      <Label
        htmlFor={props.id}
        className="text-small cursor-pointer text-slate-900"
      >
        {props.text}
      </Label>

      <RequiredLabel canShow={props.required} />
    </div>
  );
};
