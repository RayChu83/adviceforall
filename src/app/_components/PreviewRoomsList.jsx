"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { GRADUAL } from "@/lib/transitions";

import React from "react";

export default function PreviewRoomsList({ rooms }) {
  return (
    <section className="grid lg:grid-cols-9 grid-cols-1 items-center gap-5">
      <AnimatePresence>
        {rooms.map((room, index) => (
          <motion.article
            key={room._id}
            className="col-span-3 p-5 bg-blue-darker drop-shadow-md"
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            variants={GRADUAL}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-2xl">{room.name}</h3>
            <small className="text-gray-primary">
              {room.messages.length} messages
            </small>
            <p>{room.description}</p>
            <div className="mt-2 flex justify-end">
              <Button variant="primary">
                <Link href={`/rooms/${room.id}`}>View Room</Link>
              </Button>
            </div>
          </motion.article>
        ))}
      </AnimatePresence>
    </section>
  );
}
