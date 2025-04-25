"use client";

import { ComponentProps, FC } from "react";

import {
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValue,
} from "./components";

type SelectRootProps = ComponentProps<typeof SelectRoot>;
type SelectTriggerProps = ComponentProps<typeof SelectTrigger>;
type SelectValueProps = ComponentProps<typeof SelectValue>;

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Select {
  export type ItemList = {
    key: string;
    value: string;
    label: string;
  };
}

type Props = {
  rootContext: SelectRootProps;
  triggerContext: Omit<SelectTriggerProps, "className">;
  valueContext: Pick<SelectValueProps, "placeholder">;
  contentContext: {
    itemList: Array<Select.ItemList>;
  };
};

export const Select: FC<Props> = (props) => {
  return (
    <SelectRoot {...props.rootContext}>
      <SelectTrigger
        className="w-full cursor-pointer"
        {...props.triggerContext}
      >
        <SelectValue {...props.valueContext} />
      </SelectTrigger>

      <SelectContent>
        {props.contentContext.itemList.map((item, idx) => {
          const key = `${item.value}-${idx}`;
          return (
            <SelectItem key={key} value={item.value}>
              {item.label}
            </SelectItem>
          );
        })}
      </SelectContent>
    </SelectRoot>
  );
};
