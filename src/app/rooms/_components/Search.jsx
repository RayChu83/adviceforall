"use client";
import { IoSearch } from "react-icons/io5";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import AnimateUp from "@/app/_components/AnimateUp";

export default function Search({ rooms, setFilteredRooms }) {
  const [value, setValue] = useState("");
  function filter(e) {
    e.preventDefault();
    setFilteredRooms(
      rooms.filter(
        (room) =>
          room.name.toLowerCase().includes(value.toLowerCase()) ||
          room.description.toLowerCase().includes(value.toLowerCase())
      )
    );
  }
  return (
    <AnimateUp>
      <section className="mb-3 flex md:justify-end items-center gap-3">
        <form onSubmit={filter} className="md:w-fit w-full">
          <span className="bg-blue-light p-2 rounded-md flex items-center justify-between md:w-fit w-full gap-[6px]">
            <span className="flex items-center gap-[6px] w-full">
              <HiAdjustmentsHorizontal />
              <input
                className="bg-transparent outline-none placeholder:text-sm w-full"
                placeholder="Search..."
                name="search"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </span>
            <IoSearch onClick={filter} className="cursor-pointer" />
          </span>
        </form>
        <Button variant="secondary" asChild>
          <Link href="/register">New +</Link>
        </Button>
      </section>
    </AnimateUp>
  );
}
