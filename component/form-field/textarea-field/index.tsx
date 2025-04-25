"use client";

import { ComponentProps, forwardRef } from "react";

import { Textarea } from "@/component/parts";

import { FormHelperText } from "../_helper-text";
import { FormLabel } from "../_label";

type TextareaProps = Pick<
  ComponentProps<typeof Textarea>,
  | "id"
  | "readOnly"
  | "disabled"
  | "required"
  | "rows"
  | "placeholder"
  | "onChange"
  | "onBlur"
  | "onFocus"
  | "value"
>;
type Props = TextareaProps & {
  label?: string;
  helperText?: string;
};

export const TextareaField = forwardRef<HTMLTextAreaElement, Props>(
  ({ label, helperText, ...props }, ref) => {
    return (
      <div className="space-y-1">
        <FormLabel
          id={props.id}
          text={label}
          disabled={props.disabled}
          required={props.required}
        />

        <Textarea ref={ref} {...props} />

        <FormHelperText
          text={helperText}
          disabled={props.disabled}
          required={props.required}
        />
      </div>
    );
  }
);

TextareaField.displayName = "TextareaField";
