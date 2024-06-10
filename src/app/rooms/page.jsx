import RoomsList from "./_components/RoomsList";

import React from "react";

export const metadata = {
  title: "Rooms - AdviceForAll",
  description:
    "AdviceForAll offers dedicated rooms tailored to cater to your specific search requirements. Upon joining these rooms, you gain access to read previous advice given, can contribute to ongoing advice, and have the ability to like the advice you find most helpful.",
};

export default async function RoomsPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/rooms`, {
    method: "get",
    cache: "no-store",
  });
  const { rooms } = await res.json();
  return <>{rooms && <RoomsList rooms={rooms} />}</>;
}
