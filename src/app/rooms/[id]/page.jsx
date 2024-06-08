import RoomDetailed from "@/app/rooms/_components/RoomDetailed";
import { notFound } from "next/navigation";

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
  return room && <RoomDetailed room={room} id={params.id} />;
}
