import Image from "next/image";
import Link from "next/link";
import RoomAvatars from "@/app/_components/RoomAvatars";

import React from "react";

export default function Room({ room }) {
  return (
    <Link key={room._id} href={`/rooms/${room._id}`}>
      <Image
        src={room.banner.src.landscape}
        width={493}
        height={257}
        alt={room.banner.alt}
        className="rounded-t-lg bg-gray-primary transition-all duration-1000"
        loading="lazy"
        placeholder="blur"
        blurDataURL={room.banner.src.landscapeBlur}
      />
      <div className="p-5">
        <h3
          className="font-semibold text-xl line-clamp-2 group-hover:underline underline-offset-1"
          title={room.name}
        >
          {room.name}
        </h3>
        <small className="text-gray-primary flex items-center gap-1">
          {room.responses.length ? <RoomAvatars room={room} /> : null}
          {room.responses.length} response{room.responses.length !== 1 && "s"}
        </small>
      </div>
    </Link>
  );
}
