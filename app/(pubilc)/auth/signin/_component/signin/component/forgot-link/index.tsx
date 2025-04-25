"use client";

import Link from "next/link";
import { FC } from "react";

export const ForgotLink: FC = () => {
  return (
    <p className="text-sm text-gray-500">
      パスワードを忘れた方は
      <Link
        href="/auth/forgot-password"
        className=" text-blue-600 cursor-pointer duration-700 hover:underline hover:text-blue-900"
      >
        こちら
      </Link>
    </p>
  );
};
