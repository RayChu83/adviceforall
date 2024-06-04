import { Button } from "@/components/ui/button";
import getFeaturedRooms from "@/lib/getFeaturedRooms";
import Link from "next/link";
import React from "react";

export default function HowItWorks() {
  const rooms = getFeaturedRooms();
  return (
    <section>
      <article className="text-center space-y-2">
        <h3 className="font-bold text-4xl">How does it work?</h3>
        <p>
          AdviceForAll offers dedicated rooms tailored to cater to your specific
          search requirements. Upon joining these rooms, you gain access to read
          previous advice given, can contribute to ongoing advice, and have the
          ability to up vote the advice you find most helpful. Below you will
          find 3 featured rooms that you might like:
        </p>
      </article>
      <br />
      <section className="grid lg:grid-cols-9 grid-cols-1 items-center gap-5">
        {rooms.map((room) => (
          <article
            key={room.id}
            className="col-span-3 p-5 bg-blue-darker drop-shadow-md"
          >
            <h3 className="font-semibold text-2xl">{room.name}</h3>
            <small className="text-gray-primary">
              {room.messages} messages
            </small>
            <p>{room.description}</p>
            <div className="mt-2 flex justify-end">
              <Button variant="primary">
                <Link href={`/rooms/${room.id}`}>View Room</Link>
              </Button>
            </div>
          </article>
        ))}
      </section>
    </section>
  );
}
