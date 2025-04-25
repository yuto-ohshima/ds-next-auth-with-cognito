"use client";

import { TextareaField } from "@/component";
import { toast } from "@/lib";
import { FC, useCallback } from "react";

type Props = {
  accessToken: string;
};

export const AccessTokenTextareaField: FC<Props> = (props) => {
  const handleFocus = useCallback(() => {
    navigator.clipboard.writeText(props.accessToken);
    toast.success("AccessTokenをコピーしました", {
      position: "bottom-center",
      duration: 5000,
    });
  }, [props.accessToken]);

  return (
    <TextareaField
      label="AccessToken"
      readOnly
      rows={30}
      value={props.accessToken}
      onFocus={handleFocus}
    />
  );
};
