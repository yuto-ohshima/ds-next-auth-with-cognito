"use client";

import { FC } from "react";

type Props = {
  text?: string;
};

export const Text: FC<Props> = (props) => {
  if (!props.text) {
    return null;
  }

  return <p className="text-subtle text-[#64748B]">{props.text}</p>;
};
