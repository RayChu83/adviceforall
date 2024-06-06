"use client";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/transitions";
import { IoSearch } from "react-icons/io5";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";

import React from "react";

export default function Search() {
  return (
    <motion.form
      action=""
      className="mb-3 flex md:justify-end"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={FADE_UP_ANIMATION_VARIANTS}
    >
      <span className="bg-blue-light p-2 rounded-md flex items-center justify-between md:w-fit w-full">
        <span className="flex items-center gap-1">
          <HiAdjustmentsHorizontal />
          <input
            className="bg-transparent outline-none"
            placeholder="Search:"
          />
        </span>
        <IoSearch />
      </span>
    </motion.form>
  );
}
