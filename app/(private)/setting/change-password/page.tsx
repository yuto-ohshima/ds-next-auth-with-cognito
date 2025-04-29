import { BodyClient } from "./body.client";
import { Auth } from "@/auth";

export default async function ChangePasswordPage() {
  const session = await Auth.NextAuth.auth();

  return (
    <main className="grid min-h-screen items-center py-6 px-4 sm:px-8">
      <BodyClient
        initContext={{
          accessToken: session?.accessToken ?? "",
        }}
      />
    </main>
  );
}
