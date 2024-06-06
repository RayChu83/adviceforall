import React from "react";
import RoomsContainer from "@/app/_components/RoomsContainer";
import Search from "@/app/rooms/_components/Search";

export default async function RoomsPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/rooms`, {
    method: "get",
    cache: "no-store",
  });
  const { rooms } = await res.json();
  return (
    <>
      {rooms && <Search />}
      {rooms && <RoomsContainer rooms={rooms} />}
    </>
  );
}
