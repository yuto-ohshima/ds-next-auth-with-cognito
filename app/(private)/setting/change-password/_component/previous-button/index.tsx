"use client";

import { FC, useCallback } from "react";
import { Button } from "@/component";
import { useRouter } from "next/navigation";

export const PreviousButton: FC = () => {
  const { push } = useRouter();
  const handleSubmit = useCallback(() => {
    push("/");
  }, [push]);

  return (
    <Button kind="outline" onClick={handleSubmit}>
      戻る
    </Button>
  );
};
