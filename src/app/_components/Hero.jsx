"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import { motion } from "framer-motion";

import React from "react";
import { MULTIDIRECTION_SLIDE_VARIANTS } from "@/lib/transitions";

export default function Hero() {
  return (
    <section className="grid md:grid-cols-10 grid-cols-1 items-center gap-5">
      <motion.article
        className="space-y-3 col-span-6"
        initial="leftHidden"
        whileInView="visible"
        variants={MULTIDIRECTION_SLIDE_VARIANTS}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h1 className="font-bold md:text-4xl text-[32px] leading-9">
          Ask Anonymously, Grow <br /> Confidently!
        </h1>
        <Button variant="primary" asChild>
          <Link href="/rooms">
            Find Rooms <FaAngleRight />
          </Link>
        </Button>
      </motion.article>
      <motion.section
        className="col-span-4 flex md:justify-end justify-start"
        initial="rightHidden"
        whileInView="visible"
        variants={MULTIDIRECTION_SLIDE_VARIANTS}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Image src="/hero.svg" width={400} height={400} alt="Hero Image" />
      </motion.section>
    </section>
  );
}
