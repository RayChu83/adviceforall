import { Button } from "@/components/ui/button";
import { BiWorld } from "react-icons/bi";

import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center pt-10 p-5 max-w-[1560px] m-auto">
      <Link href="/" className="flex items-center gap-2 text-2xl font-bold">
        <BiWorld className="text-3xl " />
        AdviceForAll
      </Link>
      <ul className="md:flex hidden gap-5 items-center">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/rooms">Rooms</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Button variant="primary" asChild>
            <Link href="/register">Register</Link>
          </Button>
        </li>
      </ul>
    </nav>
  );
}
