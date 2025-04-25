'use client"';

import { ButtonHTMLAttributes, forwardRef } from "react";

import { cn, cva, VariantProps } from "@/lib";

const ButtonVariants = cva(
  "py-3 flex items-center hover:shadow justify-center text-center cursor-pointer duration-700 disabled:cursor-default disabled:bg-disabled disabled:shadow-none border-none gap-x-2 px-4 text-lead rounded",
  {
    variants: {
      kind: {
        primary: "bg-primary text-white hover:bg-primary-hover",
        slate: "bg-slate-900 text-white hover:bg-slate-700",
        destructive: "bg-red-500 text-white hover:bg-red-600",
        outline:
          "border border-solid border-slate-200 bg-white text-[#0F172A] hover:bg-slate-100",
      },
    },
    defaultVariants: {
      kind: "primary",
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, kind, children, ...props }, ref) => {
    return (
      <button
        className={cn(ButtonVariants({ kind }), className)}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
