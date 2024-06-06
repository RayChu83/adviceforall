import PreviewRoomsList from "@/app/_components/PreviewRoomsList";
import React from "react";

export default async function PreviewRooms() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/rooms/preview`, {
    method: "get",
    cache: "no-store",
  });
  const { rooms } = await res.json();
  return rooms && <PreviewRoomsList rooms={rooms} />;
}
