"use client";
import { AnimatePresence, motion } from "framer-motion";
import { GRADUAL } from "@/lib/transitions";

import React from "react";
import Image from "next/image";

export default function PreviewRoomsList({ rooms }) {
  return (
    <section className="grid sm:grid-cols-9 grid-cols-1 items-start gap-5">
      <AnimatePresence>
        {rooms.map((room, index) => (
          <motion.a
            key={room._id}
            href={`/rooms/${room._id}`}
            className="md:col-span-3 col-span-4 bg-blue-darker drop-shadow-md rounded-md overflow-hidden cursor-pointer"
            initial="hidden"
            whileInView="visible"
            whileHover="slide"
            exit="hidden"
            variants={{ ...GRADUAL, slide: { y: -10, transition: 0 } }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Image
              src={room.banner[0].src.landscape}
              width={0}
              height={0}
              alt={room.banner[0].alt}
              sizes="100vw"
              className="w-full h-auto rounded-t-lg"
            />
            <div className="p-5">
              <h3 className="font-semibold text-xl line-clamp-2">
                {room.name}
              </h3>
              <small className="text-gray-primary">
                {room.messages.length} messages
              </small>
            </div>
          </motion.a>
        ))}
      </AnimatePresence>
    </section>
  );
}
