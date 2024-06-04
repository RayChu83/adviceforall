import { Button } from "@/components/ui/button";
import getFeaturedRooms from "@/lib/getFeaturedRooms";
import Link from "next/link";
import React from "react";

export default function FeaturedRooms() {
  const rooms = getFeaturedRooms();
  return (
    <div>
      <h2 className="font-semibold text-3xl">Featured rooms:</h2>
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
    </div>
  );
}
