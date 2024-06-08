import Image from "next/image";
import Link from "next/link";

import React from "react";

export default function Room({ room }) {
  return (
    <Link key={room._id} href={`/rooms/${room._id}`}>
      <Image
        src={room.banner.src.landscape}
        width={0}
        height={0}
        alt={room.banner.alt}
        sizes="100vw"
        className="w-full h-auto rounded-t-lg bg-gray-primary"
        loading="lazy"
      />
      <div className="p-5">
        <h3
          className="font-semibold text-xl line-clamp-2 group-hover:underline underline-offset-1"
          title={room.name}
        >
          {room.name}
        </h3>
        <small className="text-gray-primary">
          {room.messages.length} messages
        </small>
      </div>
    </Link>
  );
}
