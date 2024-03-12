"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle them</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

import Link from "next/link";
import Container from "./ui/container";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { ThemeProvider } from "./ui/theme-provider";

const routes = [
  {
    href: "/",
    label: "Leaderboard",
  },
  {
    href: "/",
    label: "Start Text",
  },
  {
    href: "/",
    label: "Settings",
  },
];

const Header = () => {
  return (
    <header className="sm:flex sm:justify-between py-3 px-4 border-b dark:bg-black ">
      <Container>
        <div
          className="relative px-4 sm:px-5 lg:px-8
        flex h-16 items-center justify-between
        w-full text-foreground dark:bg-black"
        >
          <div className="flex items-center">
            <Link href="/" className="ml-4 lg:ml-0">
              <h1 className="text-xl font-bold">GLIDE TYPE</h1>
            </Link>
          </div>
          <nav className="mx-6 items-center space- x-4 lg:space-x-6 hidden md:block">
            {routes.map((route, i) => (
              <Button asChild variant="ghost" key={i}>
                <Link
                  href={route.href}
                  className="text-sm font-medium transition-colors"
                >
                  {route.label}
                </Link>
              </Button>
            ))}
          </nav>
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="mr-2"
              aria-label="Shopping Cart"
            >
              <ShoppingCart className="h-6 w-6" />
              <span className="sr-only">Shopping Cart</span>
            </Button>
            <ThemeProvider>
              <ModeToggle />
            </ThemeProvider>
            <Button className="ml-2">Log in</Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
