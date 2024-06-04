import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";

import React from "react";

export default function Hero() {
  return (
    <section className="grid md:grid-cols-10 grid-cols-1 items-center gap-5">
      <article className="space-y-3 col-span-6">
        <h1 className="font-bold md:text-4xl text-[32px] leading-9">
          Ask Anonymously, Grow <br /> Confidently!
        </h1>
        <Button variant="primary" asChild>
          <Link href="/rooms">
            Find Rooms <FaAngleRight />
          </Link>
        </Button>
      </article>
      <section className="col-span-4 flex md:justify-end justify-start">
        <Image src="/hero.svg" width={400} height={400} alt="Hero Image" />
      </section>
    </section>
  );
}
