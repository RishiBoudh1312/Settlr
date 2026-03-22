"use client";

import React from "react";
import { Button } from "./ui/button";
import { LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { useStoreUser } from "@/hooks/use-store-user";
import { BarLoader } from "react-spinners";
import { Authenticated, Unauthenticated } from "convex/react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const { isLoading } = useStoreUser();
  const path = usePathname();

  return (
    <header className="fixed top-0 w-full border-b border-white/10 bg-black/40 backdrop-blur-2xl z-50 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src={"/logos/divvy-logo.png"}
            alt="Divvy Logo"
            width={200}
            height={60}
            className="h-11 w-auto object-contain brightness-110 transition-all duration-300 group-hover:brightness-125 group-hover:scale-105"
          />
        </Link>

        {path === "/" && (
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="#features"
              className="text-sm font-medium text-foreground/60 hover:text-primary transition-all duration-300 relative group"
            >
              Features
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium text-foreground/60 hover:text-primary transition-all duration-300 relative group"
            >
              How It Works
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
            </Link>
          </div>
        )}

        <div className="flex items-center gap-4">
          <Authenticated>
            <Link href="/dashboard">
              <Button
                variant="outline"
                className="hidden md:inline-flex items-center gap-2 glass-card border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(0,210,255,0.3)] transition-all duration-300"
              >
                <LayoutDashboard className="h-4 w-4" />
                Dashboard
              </Button>
              <Button 
                variant="ghost" 
                className="md:hidden w-10 h-10 p-0 text-primary hover:bg-primary/10 hover:shadow-[0_0_15px_rgba(0,210,255,0.2)] transition-all"
              >
                <LayoutDashboard className="h-4 w-4" />
              </Button>
            </Link>

            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10 border-2 border-primary/30 hover:border-primary/50 transition-all duration-300 shadow-[0_0_15px_rgba(0,210,255,0.2)]",
                  userButtonPopoverCard: "glass-card-strong shadow-2xl border border-white/15",
                  userPreviewMainIdentifier: "font-semibold text-foreground",
                  userButtonPopoverActionButton: "hover:bg-primary/10 transition-colors",
                  userButtonPopoverActionButtonIcon: "text-primary",
                },
              }}
              afterSignOutUrl="/"
            />
          </Authenticated>

          <Unauthenticated>
            <SignInButton>
              <Button 
                variant="ghost" 
                className="text-foreground/70 hover:text-foreground hover:bg-white/5 transition-all duration-300"
              >
                Sign In
              </Button>
            </SignInButton>

            <SignUpButton>
              <Button className="gradient-glow border-none font-bold text-black hover:scale-105 transition-transform duration-300">
                Get Started
              </Button>
            </SignUpButton>
          </Unauthenticated>
        </div>
      </nav>
      
      {isLoading && (
        <div className="absolute bottom-0 left-0 right-0">
          <BarLoader 
            width={"100%"} 
            color="oklch(0.75 0.28 250)" 
            height={2}
          />
        </div>
      )}
    </header>
  );
}
