"use client";

import Image from "next/image";
import { navLinks } from "@/data/navlinks";
import Link from "next/link";
import MarginedComponent from "./ui/marginedComponent";


export default function Footer() {
  return (
    <footer className="bg-[#D4F1F9] text-black px-6 pt-10 pb-4">
      <MarginedComponent>
        <div className="flex justify-center items-center">
          <Image
            src="/assets/logo.png"
            alt="Travelling Monk Logo"
            width={240}
            height={240}
          />

          <div className="h-24 mx-10 w-[1px] bg-black/20" />

          <div>
            <section className="flex items-center justify-start gap-10">
             {navLinks.map(({ title, href }, i) => (
            <Link
              key={i}
              href={href}
              className="text-sm font-medium hover:underline"
            >
              {title}
            </Link>
          ))}
            </section>

            <div className="flex justify-start items-center gap-10 mt-8">
              <a href="#">
                <Image
                  src="/assets/icons/facebook.png"
                  alt="Facebook Icon"
                  width={35}
                  height={35}
                />
              </a>
              <a href="#">
                <Image
                  src="/assets/icons/instagram.png"
                  alt="Instagram Icon"
                  width={35}
                  height={35}
                />
              </a>
              <a href="#">
                <Image
                  src="/assets/icons/gmail.png"
                  alt="Gmail Icon"
                  width={35}
                  height={35}
                />
              </a>
              <a href="#">
                <Image
                  src="/assets/icons/whatsapp.png"
                  alt="WhatsApp Icon"
                  width={35}
                  height={35}
                />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-[#A7AEB5]/40 pt-4 text-center text-sm text-black">
          © {new Date().getFullYear()} Travelling Monk. All rights reserved.
        </div>
      </MarginedComponent>
    </footer>
  );
}
