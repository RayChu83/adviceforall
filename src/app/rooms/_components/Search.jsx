"use client";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/transitions";
import { IoSearch } from "react-icons/io5";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";

import React, { useState } from "react";

export default function Search({ rooms, setFilteredRooms }) {
  const [value, setValue] = useState("");
  function filter(e) {
    e.preventDefault();
    setFilteredRooms(
      rooms.filter(
        (room) =>
          room.name.toLowerCase().includes(value.toLowerCase()) ||
          room.description.toLowerCase().includes(value.toLowerCase())
      )
    );
  }
  return (
    <motion.form
      onSubmit={filter}
      className="mb-3 flex md:justify-end"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={FADE_UP_ANIMATION_VARIANTS}
    >
      <span className="bg-blue-light p-2 rounded-md flex items-center justify-between md:w-fit w-full">
        <span className="flex items-center gap-[6px]">
          <HiAdjustmentsHorizontal />
          <input
            className="bg-transparent outline-none"
            placeholder="Search:"
            name="search"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </span>
        <IoSearch onClick={filter} className="cursor-pointer" />
      </span>
    </motion.form>
  );
}
