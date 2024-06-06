import { notFound } from "next/navigation";
import React from "react";

export default async function RoomDetailedPage({ params }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/rooms/${params.id}`
  );
  if (!res.ok) return notFound();
  const room = await res.json();
  return (
    <div>
      {JSON.stringify(room) || `Something went wrong. Please try again`}
    </div>
  );
}
