"use client";

import { FC, useCallback } from "react";
import { Button } from "@/component";

type Props = {
  onSubmitCallback: () => void;
};

export const PreviousButton: FC<Props> = (props) => {
  const handleSubmit = useCallback(() => {
    props.onSubmitCallback();
  }, [props]);

  return (
    <Button kind="outline" onClick={handleSubmit}>
      戻る
    </Button>
  );
};
