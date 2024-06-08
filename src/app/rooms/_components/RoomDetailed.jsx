"use client";
import "@/app/rooms/[id]/index.css";
import Image from "next/image";
import Link from "next/link";
import { FaAngleLeft } from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar } from "@mui/material";
import { Button } from "@/components/ui/button";
import AddAdviceForm from "@/app/rooms/_components/AddAdviceForm";
import { motion } from "framer-motion";
import { GRADUAL, FADE_UP_ANIMATION_VARIANTS } from "@/lib/transitions";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import React from "react";
import AnimateUp from "@/app/_components/AnimateUp";

export default function RoomDetailed({ room, id }) {
  return (
    <div>
      <Link
        href="/rooms"
        className="flex items-center gap-[6px] mb-2 hover:underline underline-offset-1"
      >
        <FaAngleLeft />
        Return to All
      </Link>
      <section className="bg-blue-darker rounded-md drop-shadow-md overflow-hidden">
        <AnimateUp>
          <Image
            src={`https://images.pexels.com/photos/${String(
              room.banner.id
            )}/pexels-photo-${String(
              room.banner.id
            )}.jpeg?auto=compress&fit=crop&h=400&w=1560`}
            alt={room.banner.alt}
            width={1560}
            height={400}
            className="bg-gray-primary fade-banner h-400"
            loading="lazy"
          />
        </AnimateUp>
        <article className="p-4">
          <AnimateUp>
            <h3 className="text-xl font-semibold" title={room.name}>
              {room.name}
            </h3>
            <small className="text-gray-primary">
              {room.responses.length} response
              {room.responses.length !== 1 && "s"}
            </small>
          </AnimateUp>
          {room.responses.length ? (
            <div className="md:w-[90%] w-[80%] m-auto py-5">
              <Carousel className="w-full">
                <CarouselContent>
                  {room.responses.map((response, index) => (
                    <CarouselItem
                      key={response._id}
                      className="pl-1 md:basis-1/2 lg:basis-1/3"
                    >
                      <motion.article
                        className="p-4 flex flex-col gap-2 max-h-[250px] relative bg-blue-light overflow-y-hidden group rounded-md drop-shadow-md h-full background-fade"
                        initial="hidden"
                        whileInView="visible"
                        exit="hidden"
                        variants={GRADUAL}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <span className="flex items-center gap-2 font-medium">
                          <Avatar sx={{ bgcolor: response.avatarColor }}>
                            A
                          </Avatar>
                          Anonymous
                        </span>
                        <p className="text-fade">{response.message}</p>
                        <Button
                          className="absolute bottom-2 left-[47%] transform -translate-x-1/2 group-hover:opacity-100 opacity-0 transition-opacity duration-250 shadow-2xl"
                          variant="primary"
                        >
                          View More
                        </Button>
                      </motion.article>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          ) : (
            <motion.section
              className="py-5"
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
              <motion.img
                variants={FADE_UP_ANIMATION_VARIANTS}
                src="/no-advice.svg"
                width="250"
                height="250"
                alt="No advice found"
                className="m-auto mb-3"
              />
              <motion.h3
                variants={FADE_UP_ANIMATION_VARIANTS}
                className="text-center font-medium text-gray-primary"
              >
                Oops! Nothing here yet. <br /> Be the first to give some advice.
              </motion.h3>
            </motion.section>
          )}
          <AddAdviceForm id={id} />
        </article>
      </section>
    </div>
  );
}
