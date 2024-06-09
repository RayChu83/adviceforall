"use client";
import AnimateUp from "@/app/_components/AnimateUp";
import RoomsContainer from "@/app/_components/RoomsContainer";
import { IoSearch } from "react-icons/io5";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import React, { useState } from "react";

export default function RoomsList({ rooms }) {
  const [appliedFilter, setAppliedFilter] = useState("oldest");
  const [filteredRooms, setFilteredRooms] = useState(rooms);
  const [value, setValue] = useState("");
  function searchFilter(e) {
    e.preventDefault();
    setFilteredRooms(
      rooms.filter((room) =>
        room.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  }
  const filters = [
    { label: "Most responses", value: "responses" },
    { label: "Most recent", value: "recent" },
    { label: "Most oldest", value: "oldest" },
  ];
  return (
    <>
      <AnimateUp>
        <section className="mb-3 flex md:justify-end items-center gap-3">
          <form onSubmit={searchFilter} className="md:w-fit w-full">
            <span className="bg-blue-light p-2 rounded-md flex items-center justify-between md:w-fit w-full gap-[6px]">
              <span className="flex items-center gap-[6px] w-full">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <HiAdjustmentsHorizontal />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Sort by...</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {filters.map((filter, index) => (
                      <DropdownMenuItem
                        key={index}
                        onClick={() => setAppliedFilter(filter.value)}
                        className={
                          appliedFilter === filter.value
                            ? "text-blue-primary font-bold"
                            : ""
                        }
                      >
                        {filter.label}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
                <input
                  className="bg-transparent outline-none placeholder:text-sm w-full"
                  placeholder="Search..."
                  name="search"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
              </span>
              <IoSearch onClick={searchFilter} className="cursor-pointer" />
            </span>
          </form>
          <Button variant="secondary" asChild>
            <Link href="/register">New +</Link>
          </Button>
        </section>
      </AnimateUp>
      <RoomsContainer rooms={filteredRooms} />
    </>
  );
}
