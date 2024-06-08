"use client";
import { AnimatePresence, motion } from "framer-motion";
import { GRADUAL } from "@/lib/transitions";
import Room from "@/app/_components/Room";

import React from "react";

export default function RoomsContainer({ rooms }) {
  return (
    <section className="grid lg:grid-cols-9 sm:grid-cols-6 grid-cols-1 items-start gap-5">
      <AnimatePresence>
        {rooms.map((room, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={GRADUAL}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="col-span-3 bg-blue-darker drop-shadow-md rounded-md overflow-hidden cursor-pointer group"
          >
            <Room room={room} />
          </motion.div>
        ))}
      </AnimatePresence>
    </section>
  );
}
