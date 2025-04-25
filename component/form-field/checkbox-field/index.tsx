"use client";

import { ComponentProps, FC } from "react";

import { Checkbox } from "@/component/parts";

import { FormHelperText } from "../_helper-text";

type CheckboxProps = ComponentProps<typeof Checkbox>;
type Props = CheckboxProps & {
  helperText?: string;
};

export const CheckboxField: FC<Props> = ({ helperText, ...props }) => {
  return (
    <div className="space-y-1">
      <Checkbox {...props} />

      <FormHelperText text={helperText} />
    </div>
  );
};
