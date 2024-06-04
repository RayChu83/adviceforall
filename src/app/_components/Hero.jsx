import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";

import React from "react";

export default function Hero() {
  return (
    <section className="grid md:grid-cols-10 grid-cols-1 items-center gap-5">
      <article className="space-y-3 col-span-7">
        <h1 className="font-bold md:text-5xl text-[32px] leading-9">
          Ask Anonymously, <br /> Grow Confidently!
        </h1>
        <Button variant="primary" asChild>
          <Link href="/rooms">
            Find Rooms <FaAngleRight />
          </Link>
        </Button>
      </article>
      <section className="col-span-3">
        <Image
          src="/hero.svg"
          width={0}
          height={0}
          sizes="100vw"
          alt="Hero Image"
          className="w-full h-auto"
        />
      </section>
    </section>
  );
}
