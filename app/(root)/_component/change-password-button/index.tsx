"use client";

import Image from "next/image";
import { Button } from "@/component";
import Link from "next/link";

export const ChangePasswordButton: React.FC = () => {
  return (
    <Button kind="outline">
      <Link
        href="/setting/change-password"
        className="flex items-center gap-2  hover:underline hover:underline-offset-4"
      >
        <Image
          aria-hidden
          src="/window.svg"
          alt="Window icon"
          width={16}
          height={16}
        />
        パスワード変更 🔑
      </Link>
    </Button>
  );
};
