"use client";
import "@/app/rooms/[id]/index.css";
import Image from "next/image";
import Link from "next/link";
import { FaAngleLeft, FaArrowUp } from "react-icons/fa";
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
import AnimateUp from "@/app/_components/AnimateUp";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaHeart } from "react-icons/fa";
import { FaReply } from "react-icons/fa";
import { useRouter } from "next/navigation";

import React, { useRef, useState } from "react";
import { formatTimestamp } from "../utils";

export default function RoomDetailed({ room, id }) {
  const inputRef = useRef();
  const [isShowingAll, setIsShowingAll] = useState(false);
  const [comment, setComment] = useState("");
  const router = useRouter();
  const handleSubmit = async (e, id) => {
    e.preventDefault();
    const res = await fetch(`/api/responses/${id}/comment`, {
      method: "post",
      cache: "no-store",
      body: JSON.stringify({ comment }),
    });
    if (res.ok) {
      setComment("");
      router.refresh();
    }
  };
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
              {" • "}
              {formatTimestamp(room.createdAt)}
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
                        className="p-4 flex flex-col gap-2 max-h-[250px] relative bg-blue-light overflow-y-hidden group rounded-md drop-shadow-md h-full"
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
                          <span className="flex flex-col">
                            Anonymous
                            <small className="text-gray-primary">
                              {formatTimestamp(response.createdAt)}
                            </small>
                          </span>
                        </span>
                        <p>{response.message}</p>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              className="absolute bottom-2 left-[47%] transform -translate-x-1/2 group-hover:opacity-100 opacity-0 transition-opacity duration-250 drop-shadow-4xl"
                              variant="primary"
                            >
                              View More
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader></DialogHeader>
                            <article className="p-4 flex flex-col gap-2 bg-blue-light rounded-md drop-shadow-md h-full">
                              <span className="flex items-center gap-2 font-medium">
                                <Avatar sx={{ bgcolor: response.avatarColor }}>
                                  A
                                </Avatar>
                                <span className="flex flex-col">
                                  Anonymous
                                  <small className="text-gray-primary">
                                    {formatTimestamp(response.createdAt)}
                                  </small>
                                </span>
                              </span>
                              <span className="space-y-1">
                                <small
                                  className={
                                    !isShowingAll ? "line-clamp-2" : ""
                                  }
                                >
                                  {response.message}
                                </small>
                                <small
                                  onClick={() =>
                                    setIsShowingAll((prev) => !prev)
                                  }
                                  className="text-gray-400 cursor-pointer"
                                >
                                  {" "}
                                  Show {isShowingAll ? "Less" : "More"}
                                </small>
                              </span>
                              <span className="flex items-center gap-2">
                                <Button
                                  size="inLine"
                                  variant="none"
                                  className="text-gray-primary flex items-center gap-1"
                                >
                                  <FaHeart />
                                  {response.likes} Like
                                  {response.likes !== 1 && "s"}
                                </Button>
                                <Button
                                  size="inLine"
                                  variant="none"
                                  className="text-gray-primary flex items-center gap-1"
                                  onClick={() => inputRef.current.focus()}
                                >
                                  <FaReply />
                                  Reply
                                </Button>
                              </span>
                            </article>
                            {response.comments.length !== 0 ? (
                              response.comments.map((comment) => (
                                <article
                                  className="p-4 flex flex-col gap-2 rounded-md drop-shadow-md h-full"
                                  key={comment._id}
                                >
                                  <span className="flex items-center gap-2 font-medium">
                                    <Avatar
                                      sx={{ bgcolor: comment.avatarColor }}
                                    >
                                      A
                                    </Avatar>
                                    <span className="flex flex-col">
                                      Anonymous
                                      <small className="text-gray-primary">
                                        {formatTimestamp(comment.createdAt)}
                                      </small>
                                    </span>
                                  </span>
                                  <small>{comment.message}</small>
                                  <Button
                                    size="inLine"
                                    variant="none"
                                    className="text-gray-primary flex items-center gap-1 w-fit"
                                  >
                                    <FaHeart />
                                    {comment.likes} Like
                                    {comment.likes !== 1 && "s"}
                                  </Button>
                                </article>
                              ))
                            ) : (
                              <section className="py-5">
                                <Image
                                  src="/no-advice.svg"
                                  width="250"
                                  height="250"
                                  alt="No advice found"
                                  className="m-auto mb-3"
                                />
                                <h3 className="text-center font-medium text-gray-primary">
                                  Oops! No replies yet.
                                  <br />
                                  Be the first to reply to this comment.
                                </h3>
                              </section>
                            )}
                            <DialogFooter className="sticky bottom-0 drop-shadow-3xl">
                              <form
                                onSubmit={(e) => handleSubmit(e, response._id)}
                                className="flex items-center w-full gap-2"
                              >
                                <input
                                  type="text"
                                  placeholder="Reply..."
                                  className={`bg-blue-light p-2 rounded-2xl focus:outline-blue-primary placeholder:text-sm w-full indent-1`}
                                  value={comment}
                                  onChange={(e) => setComment(e.target.value)}
                                  ref={inputRef}
                                />
                                <Button
                                  variant="primary"
                                  className={`w-[40px] h-[40px] rounded-full ${
                                    !comment && "cursor-not-allowed"
                                  }`}
                                  disabled={!comment}
                                >
                                  <FaArrowUp />
                                </Button>
                              </form>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
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
