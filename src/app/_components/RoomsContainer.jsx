"use client";
import { motion } from "framer-motion";
import { GRADUAL } from "@/lib/transitions";
import Room from "@/app/_components/Room";

import React from "react";
import Image from "next/image";

export default function RoomsContainer({ rooms }) {
  console.log(rooms);
  return (
    <>
      {rooms.length ? (
        <section className="grid lg:grid-cols-9 sm:grid-cols-6 grid-cols-1 items-start gap-5">
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
        </section>
      ) : (
        <section className="flex justify-center gap-2 flex-col m-auto text-center items-center h-[75vh]">
          <Image
            src="/room-not-found.svg"
            alt="Room not found"
            width="250"
            height="250"
          />
          <h3 className="text-center font-medium text-gray-primary">
            Oops! No rooms found. <br /> Please broaden your search or try
            again.
          </h3>
        </section>
      )}
    </>
  );
}
