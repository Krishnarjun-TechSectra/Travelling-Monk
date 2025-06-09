"use client";

import React from "react";
import MarginedComponent from "./ui/marginedComponent";
import { AlignJustify } from "lucide-react";
import { navLinks } from "@/data/navlinks";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <div className="h-16 bg-white flex justify-between shadow-sm z-50 fixed w-full top-0">
      <MarginedComponent styles="py-4 flex items-center justify-between w-full">
        {/* Logo */}
        <img src="/assets/logo.png" className="h-10" alt="Logo" />

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 justify-end">
          {navLinks.map(({ title, href }, i) => (
            <Link
              key={i}
              href={href}
              className="text-sm font-medium hover:underline cursor-pointer"
            >
              {title}
            </Link>
          ))}
          <Button className="ml-2">Explore</Button>
        </div>

        {/* Mobile Drawer */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <AlignJustify className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>
                  <img src="/assets/logo.png" className="h-12" alt="Logo" />
                </SheetTitle>
              </SheetHeader>
              <div className=" my-6 mx-6 flex flex-col gap-4">
                {navLinks.map(({ title, href }, i) => (
                  <Link
                    key={i}
                    href={href}
                    className="font-medium hover:underline"
                  >
                    {title}
                  </Link>
                ))}
                <Button className="mt-6">Get Started</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </MarginedComponent>
    </div>
  );
};

export default Navbar;
