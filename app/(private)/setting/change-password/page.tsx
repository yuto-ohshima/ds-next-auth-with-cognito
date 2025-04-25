import { auth } from "@/app/api/auth/[...nextauth]/route";
import { BodyClient } from "./body.client";

export default async function ChangePasswordPage() {
  const session = await auth();

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
