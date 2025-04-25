"use client";

import { ComponentProps, FC } from "react";

import { CheckboxRoot, Label, Text } from "./components";

type CheckboxRootProps = Pick<
  ComponentProps<typeof CheckboxRoot>,
  "checked" | "onCheckedChange" | "disabled"
>;
type Props = CheckboxRootProps & {
  id: string;
  label: string;
  text?: string;
};

export const Checkbox: FC<Props> = (props) => {
  return (
    <div className="flex items-start space-x-2">
      <CheckboxRoot
        id={props.id}
        disabled={props.disabled}
        checked={props.checked}
        onCheckedChange={props.onCheckedChange}
      />

      <div className="grid gap-1.5 leading-none">
        <Label id={props.id} text={props.label} />
        <Text text={props.text} />
      </div>
    </div>
  );
};
