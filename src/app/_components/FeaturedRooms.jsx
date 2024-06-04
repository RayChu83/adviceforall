"use client";
import PreviewRooms from "@/app/_components/PreviewRooms";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/transitions";
import { motion } from "framer-motion";

import React from "react";

export default function FeaturedRooms() {
  return (
    <div>
      <motion.h2
        className="font-semibold text-3xl"
        initial="hidden"
        whileInView="show"
        variants={FADE_UP_ANIMATION_VARIANTS}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Featured rooms:
      </motion.h2>
      <br />
      <PreviewRooms />
    </div>
  );
}
