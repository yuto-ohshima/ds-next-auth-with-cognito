"use client";

import { ComponentProps, forwardRef } from "react";

import { Input } from "@/component/parts";

import { FormHelperText } from "../_helper-text";
import { FormLabel } from "../_label";

type InputProps = Pick<
  ComponentProps<typeof Input>,
  | "id"
  | "disabled"
  | "required"
  | "placeholder"
  | "onChange"
  | "onBlur"
  | "value"
>;
type Props = InputProps & {
  label?: string;
  helperText?: string;
};

export const DateInputField = forwardRef<HTMLInputElement, Props>(
  ({ label, helperText, ...props }, ref) => {
    return (
      <div className="space-y-1">
        <FormLabel
          id={props.id}
          text={label}
          disabled={props.disabled}
          required={props.required}
        />

        <Input
          className="text-lead grid items-center"
          type="date"
          ref={ref}
          {...props}
        />

        <FormHelperText
          text={helperText}
          disabled={props.disabled}
          required={props.required}
        />
      </div>
    );
  },
);

DateInputField.displayName = "DateInputField";
