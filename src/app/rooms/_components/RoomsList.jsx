"use client";
import RoomsContainer from "@/app/_components/RoomsContainer";
import Search from "@/app/rooms/_components/Search";

import React, { useState } from "react";

export default function RoomsList({ rooms }) {
  const [filteredRooms, setFilteredRooms] = useState(rooms);
  return (
    <>
      <Search rooms={rooms} setFilteredRooms={setFilteredRooms} />
      <RoomsContainer rooms={filteredRooms} />
    </>
  );
}
