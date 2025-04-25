"use client";

import { ComponentProps, forwardRef } from "react";

import { cn } from "@/lib";

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "border-input text-subtle flex min-h-20 w-full rounded-md border border-slate-400 bg-white px-3 py-2 ring-offset-white",
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
});

Textarea.displayName = "Textarea";
