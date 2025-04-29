import Image from "next/image";
import {
  ChangePasswordButton,
  SignOutButton,
  AccessTokenTextareaField,
} from "./_component";
import { Auth } from "@/auth";

export default async function RootPage() {
  const session = await Auth.NextAuth.auth();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <Image
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <div className="flex gap-x-2 items-center">
          <SignOutButton />
          <ChangePasswordButton />
        </div>

        <div className="w-full">
          <AccessTokenTextareaField accessToken={session?.accessToken ?? ""} />
        </div>
      </main>
    </div>
  );
}
