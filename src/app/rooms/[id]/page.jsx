import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaAngleLeft } from "react-icons/fa";

import React from "react";

export default async function RoomDetailedPage({ params }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/rooms/${params.id}`
  );
  if (!res.ok) return notFound();
  const { room } = await res.json();
  return (
    <div>
      <span className="space-y-[6px]">
        <Link href="/rooms" className="flex items-center gap-[6px]">
          <FaAngleLeft />
          Return to All
        </Link>
        <Image
          src={`https://images.pexels.com/photos/${String(
            room.banner.id
          )}/pexels-photo-${String(
            room.banner.id
          )}.jpeg?auto=compress&fit=crop&h=300&w=1560`}
          alt={room.banner.alt}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto bg-gray-primary"
          loading="lazy"
        />
      </span>
    </div>
  );
}
