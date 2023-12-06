"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";

export default function Home() {
  const { user, isLoading } = useUser();

  const loginStatusContent = useMemo(() => {
    debugger;
    if (user) {
      return (
        <>
          <pre>{JSON.stringify(user, null, 2)}</pre>
          <Link className="" href={"/api/auth/logout"}>
            logout
          </Link>
        </>
      );
    }
    return (
      <Link className="" href={"/api/auth/login"}>
        Login
      </Link>
    );
  }, [user]);

  const content = useMemo(() => {
    if (isLoading) {
      return <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
    }

    return loginStatusContent;
  }, [isLoading, loginStatusContent]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {content}
    </main>
  );
}
