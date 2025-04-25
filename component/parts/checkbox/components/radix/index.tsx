"use client";

import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import { Check, CheckboxPrimitive, cn } from "@/lib";

export const CheckboxRoot = forwardRef<
  ElementRef<typeof CheckboxPrimitive.Root>,
  ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer ring-offset-background h-4 w-4 shrink-0 rounded-sm border border-[#E5E7EB] bg-white",
      "focus-visible:ring-2 focus-visible:ring-[#E5E7EB] focus-visible:ring-offset-2 focus-visible:outline-none",
      "data-[state=checked]:text-primary-foreground data-[state=checked]:bg-white",
      "disabled:cursor-not-allowed disabled:opacity-50",
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <Check className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));

CheckboxRoot.displayName = CheckboxPrimitive.Root.displayName;
