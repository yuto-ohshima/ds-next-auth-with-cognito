"use client";

import { FC, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { toast } from "@/lib";

export const Success: FC = () => {
  const initializedRef = useRef(false);
  const { push } = useRouter();
  useEffect(() => {
    if (initializedRef.current) {
      return;
    }

    initializedRef.current = true;

    push("/");
    toast.success("ログインしました", {
      position: "bottom-center",
      duration: 5000,
    });
  }, [push]);

  return <></>;
};
