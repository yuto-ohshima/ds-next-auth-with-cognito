"use client";

import { ComponentProps, forwardRef } from "react";

import { cn } from "@/lib";

export const Input = forwardRef<HTMLInputElement, ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "border-input text-lead flex h-14 w-full rounded-md border border-slate-400 bg-white px-3 py-2 ring-offset-white",
          "focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:outline-none",
          "file:text-lead file:border-0 file:bg-transparent",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "placeholder:text-slate-400",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";
