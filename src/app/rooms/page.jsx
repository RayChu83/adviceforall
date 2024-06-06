import React from "react";
import RoomsContainer from "@/app/_components/RoomsContainer";

export default async function RoomsPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/rooms`, {
    method: "get",
    cache: "no-store",
  });
  const { rooms } = await res.json();
  return rooms && <RoomsContainer rooms={rooms} />;
}
