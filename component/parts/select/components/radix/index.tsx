"use client";

import { Check, ChevronDown } from "lucide-react";
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from "react";

import { cn, SelectPrimitive } from "@/lib";

export const SelectRoot = SelectPrimitive.Root;

export const SelectGroup = SelectPrimitive.Group;

export const SelectValue = SelectPrimitive.Value;

export const SelectTrigger = forwardRef<
  ElementRef<typeof SelectPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "text-lead ring-none grid w-full grid-cols-[1fr_16px] items-center gap-x-2.5 rounded-md border border-slate-300 bg-white px-3 py-3.5 text-left text-slate-900 outline-none",
      "data-[disabled]:cursor-default data-[disabled]:opacity-50 data-[placeholder]:text-slate-400",
      className,
    )}
    {...props} //
  >
    {children}

    <SelectPrimitive.Icon asChild>
      <ChevronDown size={24} className="text-slate-400" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));

SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

export const SelectContent = forwardRef<
  ElementRef<typeof SelectPrimitive.Content>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 w-full overflow-hidden rounded-md border border-solid border-slate-100 bg-white p-[5px] shadow",
        position === "popper" ? "data-[side=bottom]:translate-y-2" : null,
        className,
      )}
      position={position}
      {...props} //
    >
      <SelectPrimitive.Viewport
        className={cn(
          position === "popper"
            ? "h-full max-h-60 w-full min-w-[var(--radix-select-trigger-width)]"
            : null,
        )} //
      >
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));

SelectContent.displayName = SelectPrimitive.Content.displayName;

export const SelectItem = forwardRef<
  ElementRef<typeof SelectPrimitive.Item>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "text-p ring-none grid w-full cursor-pointer grid-cols-[16px_1fr] items-center gap-x-2 rounded-md px-2 py-2.5 whitespace-nowrap text-slate-700 duration-700 outline-none select-none",
      "data-[state=checked]:cursor-default data-[state=checked]:bg-slate-100",
      "hover:bg-slate-100",
      className,
    )}
    {...props} //
  >
    <SelectPrimitive.ItemIndicator asChild>
      <Check size={16} className="text-slate-700" />
    </SelectPrimitive.ItemIndicator>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));

SelectItem.displayName = SelectPrimitive.Item.displayName;
