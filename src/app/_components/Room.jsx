import { Avatar, AvatarGroup } from "@mui/material";
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
        className="w-full h-auto rounded-t-lg bg-gray-primary transition-all duration-1000"
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
          {room.responses.length ? (
            <AvatarGroup spacing={1} className="avatarGroup">
              {room.responses.map((response, index) => (
                <Avatar
                  key={index}
                  sx={{
                    bgcolor: response.avatarColor,
                    width: 20,
                    height: 20,
                    fontSize: "10px",
                  }}
                  style={{ border: "none" }}
                >
                  A
                </Avatar>
              ))}
            </AvatarGroup>
          ) : null}
          {room.responses.length} response{room.responses.length !== 1 && "s"}
        </small>
      </div>
    </Link>
  );
}
