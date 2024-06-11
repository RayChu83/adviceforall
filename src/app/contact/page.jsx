"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS, BLUR_IN } from "@/lib/transitions";
import ContactForm from "@/app/contact/_components/ContactForm";

import React from "react";

export default function ContactPage() {
  return (
    <section>
      <motion.article
        className="text-center"
        initial="hidden"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <motion.h1
          className="text-5xl font-bold"
          variants={FADE_UP_ANIMATION_VARIANTS}
        >
          Get in Touch
        </motion.h1>
        <motion.p variants={FADE_UP_ANIMATION_VARIANTS}>
          Want to view our frequently asked questions? Check it out{" "}
          <Link href="/faq" className="text-blue-primary">
            here
          </Link>
        </motion.p>
      </motion.article>
      <br />
      <motion.span
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        variants={BLUR_IN}
      >
        <ContactForm />
      </motion.span>
    </section>
  );
}
