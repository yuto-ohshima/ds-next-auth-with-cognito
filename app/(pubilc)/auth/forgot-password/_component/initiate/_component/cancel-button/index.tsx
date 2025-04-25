"use client";

import { FC, useCallback } from "react";
import { Button } from "@/component";
import { useRouter } from "next/navigation";

export const CancelButton: FC = () => {
  const { push } = useRouter();
  const handleSubmit = useCallback(() => {
    push("/auth/signin");
  }, [push]);

  return (
    <Button kind="outline" onClick={handleSubmit}>
      キャンセル
    </Button>
  );
};
