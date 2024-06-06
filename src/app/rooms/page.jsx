import RoomsList from "./_components/RoomsList";

import React from "react";

export default async function RoomsPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/rooms`, {
    method: "get",
    cache: "no-store",
  });
  const { rooms } = await res.json();
  return <>{rooms && <RoomsList rooms={rooms} />}</>;
}
