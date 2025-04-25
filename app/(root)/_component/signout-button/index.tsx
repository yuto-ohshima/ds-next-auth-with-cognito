"use client";

import Image from "next/image";
import { Button } from "@/component";
import { useCallback } from "react";
import { toast, signOut } from "@/lib";
import { useRouter } from "next/navigation";

export const SignOutButton = () => {
  const { push } = useRouter();
  const handleSignOut = useCallback(() => {
    signOut({ redirect: false })
      .then(() => {
        push("/auth/signin");
        toast.success("ログアウトしました", {
          position: "bottom-center",
          duration: 5000,
        });
      })
      .catch((e) => {
        console.error("ログアウトに失敗しました。", e);
        toast.error("ログアウトに失敗しました。再度お試しください", {
          position: "bottom-center",
          duration: 5000,
        });
      });
  }, [push]);

  return (
    <Button
      kind="outline"
      className="flex items-center gap-2  hover:underline hover:underline-offset-4"
      onClick={handleSignOut}
    >
      <Image
        aria-hidden
        src="/globe.svg"
        alt="Globe icon"
        width={16}
        height={16}
      />
      ログアウト →
    </Button>
  );
};
