import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function notFound() {
  const navigationLinks = [
    { href: "/rooms", text: "See all rooms", variant: "primary" },
    { href: "/", text: "Go home", variant: "secondary" },
  ];
  return (
    <section className="flex justify-center gap-2 flex-col m-auto text-center items-center h-[75vh]">
      <Image
        src="/room-not-found.svg"
        alt="Room not found"
        width="250"
        height="250"
      />
      <h1 className="text-red-500 text-5xl font-bold">404</h1>
      <h2 className="text-2xl">Room does not exist.</h2>
      <span className="flex gap-2 items-center flex-wrap justify-center">
        {navigationLinks.map((navigationLink) => (
          <Link href={navigationLink.href} key={navigationLink.href}>
            <Button variant={navigationLink.variant}>
              {navigationLink.text}
            </Button>
          </Link>
        ))}
      </span>
    </section>
  );
}
