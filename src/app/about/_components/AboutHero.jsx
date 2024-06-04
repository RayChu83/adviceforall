"use client";
import { MULTIDIRECTION_SLIDE_VARIANTS } from "@/lib/transitions";
import { motion } from "framer-motion";
import Image from "next/image";

import React from "react";

export default function AboutHero() {
  return (
    <section className="grid md:grid-cols-10 grid-cols-1 items-center gap-5 mb-10">
      <motion.article
        className="col-span-6"
        initial="leftHidden"
        whileInView="visible"
        variants={MULTIDIRECTION_SLIDE_VARIANTS}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="max-w-[600px] space-y-2">
          <h1 className="font-bold md:text-4xl text-[32px] leading-9">
            Our Mission:
          </h1>
          <p>
            AdviceForAll is dedicated bridging the informative gap by providing
            a platform for users to share their insights and offer guidance on a
            wide range of topics from anyone across the globe. Our platform
            empowers users to both learn from and contribute to a wide variety
            of topics, covering everything from personal growth to professional
            development and beyond.
          </p>
        </div>
      </motion.article>
      <motion.section
        className="col-span-4 flex md:justify-end justify-start"
        initial="rightHidden"
        whileInView="visible"
        variants={MULTIDIRECTION_SLIDE_VARIANTS}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Image
          src="/about-hero.svg"
          width={400}
          height={400}
          alt="Hero Image"
        />
      </motion.section>
    </section>
  );
}
