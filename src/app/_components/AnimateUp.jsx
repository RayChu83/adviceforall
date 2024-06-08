"use client";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/transitions";
import { motion } from "framer-motion";
import React from "react";

export default function AnimateUp({ children }) {
  return (
    <motion.span
      initial="hidden"
      whileInView="show"
      variants={FADE_UP_ANIMATION_VARIANTS}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.span>
  );
}
