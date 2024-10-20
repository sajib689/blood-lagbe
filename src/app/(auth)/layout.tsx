"use client";
import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
interface AuthLayoutProps {
  children: React.ReactNode;
}
const AuthLayout = ({ children }: AuthLayoutProps) => {
  const pathnema = usePathname();
  const isSignIn = pathnema === "/sign-in";
  return (
    <main className="min-h-screen">
      <Container>
        <nav className="flex items-center justify-between py-4">
          <Image
            src="/logo.png"
            alt="Logo"
            height={40}
            width={40}
            className="rounded-full"
          />
          <Button asChild>
            <Link href={isSignIn ? "/sign-up" : "/sign-in"}>
              {isSignIn ? "Sign Up" : "Sign In"}
            </Link>
          </Button>
        </nav>
        <div> {children}</div>
      </Container>
    </main>
  );
};

export default AuthLayout;
