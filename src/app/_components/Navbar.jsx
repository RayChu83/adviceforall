"use client";
import { Button } from "@/components/ui/button";
import { BiWorld } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { usePathname } from "next/navigation";

import React, { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  console.log(pathname);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Rooms", href: "/rooms" },
    { name: "FAQ's", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <>
      <nav className="flex justify-between items-center pt-10 p-5 max-w-[1560px] m-auto z-50 relative">
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-bold"
          onClick={() => setIsNavOpen(false)}
        >
          <BiWorld className="text-3xl" />
          AdviceForAll
        </Link>
        {isNavOpen ? (
          <button
            className="text-xl"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <IoClose className="text-red-500" />
          </button>
        ) : (
          <ul className="md:flex hidden gap-5 items-center">
            {navLinks.map((navLink) => (
              <li key={navLink.href}>
                <Link
                  href={navLink.href}
                  className={`${
                    navLink.href === pathname &&
                    "font-semibold underline underline-offset-2"
                  } transition-all duration-200`}
                >
                  {navLink.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
        <button
          className={`md:hidden block text-xl ${isNavOpen && "hidden"}`}
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          <FaBars />
        </button>
      </nav>
      <div
        className={`fixed bg-blue-dark top-0 bottom-0 ${
          isNavOpen ? "left-0" : "left-[-100%]"
        } w-full overflow-y-auto text-center drop-shadow-md transition-left duration-200 z-10 flex justify-center items-center`}
      >
        <ul className="flex flex-col gap-5 items-center justify-center">
          {navLinks.map((navLink) => (
            <li key={navLink.href} onClick={() => setIsNavOpen(false)}>
              <Link
                href={navLink.href}
                className={`${
                  navLink.href === pathname &&
                  "font-semibold underline underline-offset-2"
                } transition-all duration-200`}
              >
                {navLink.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
