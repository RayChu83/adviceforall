import "@/app/rooms/[id]/index.css";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
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

import React from "react";

export default async function RoomDetailedPage({ params }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/rooms/${params.id}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) return notFound();
  const { room } = await res.json();
  console.log(room.responses);
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
        <article className="p-4">
          <h3 className="text-xl font-semibold" title={room.name}>
            {room.name}
          </h3>
          <small className="text-gray-primary">
            {room.responses.length} response{room.responses.length !== 1 && "s"}
          </small>
          {room.responses.length ? (
            <div className="md:w-[90%] w-[80%] m-auto py-5">
              <Carousel className="w-full">
                <CarouselContent>
                  {room.responses.map((response) => (
                    <CarouselItem
                      key={response._id}
                      className="pl-1 md:basis-1/2 lg:basis-1/3"
                    >
                      <article className="p-4 flex flex-col gap-2 max-h-[250px] relative bg-blue-light overflow-y-hidden group rounded-md drop-shadow-md h-full background-fade">
                        <span className="flex items-center gap-2 font-medium">
                          <Avatar sx={{ bgcolor: response.avatarColor }}>
                            A
                          </Avatar>
                          Anonymous
                        </span>
                        <p className="text-fade">{response.message}</p>
                        <Button
                          className="absolute bottom-2 left-[47%] transform -translate-x-1/2 group-hover:opacity-100 opacity-0 transition-opacity duration-250"
                          variant="primary"
                        >
                          View More
                        </Button>
                      </article>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
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
                Oops! Nothing here yet. <br /> Be the first to give some advice.
              </h3>
            </section>
          )}
          <AddAdviceForm id={params.id} />
        </article>
      </section>
    </div>
  );
}
