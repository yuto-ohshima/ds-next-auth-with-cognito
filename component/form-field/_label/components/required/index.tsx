"use client";

import { FC } from "react";

import { Label } from "@/component/parts";

type Props = {
  canShow?: boolean;
};

export const RequiredLabel: FC<Props> = (props) => {
  if (!props.canShow) {
    return null;
  }

  return <Label className="text-subtle-medium text-red-500">*</Label>;
};
