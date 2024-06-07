"use client";
import PreviewRooms from "@/app/_components/PreviewRooms";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/transitions";

import React from "react";

export default function HowItWorks() {
  return (
    <section>
      <motion.article
        className="text-center space-y-2"
        initial="hidden"
        whileInView="show"
        variants={FADE_UP_ANIMATION_VARIANTS}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h3 className="font-bold text-4xl">How does it work?</h3>
        <p>
          AdviceForAll offers dedicated rooms tailored to cater to your specific
          search requirements. Upon joining these rooms, you gain access to read
          previous advice given, can contribute to ongoing advice, and have the
          ability to up vote the advice you find most helpful. Below you will
          find 3 featured rooms that you might like:
        </p>
      </motion.article>
    </section>
  );
}
