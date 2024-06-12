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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";

import React, { useEffect, useState, useTransition } from "react";
import { sortByMostRecent, sortByOldest, sortByResponses } from "../utils";

export default function RoomsList({ rooms }) {
  const [filteredRooms, setFilteredRooms] = useState(rooms);
  const [currentFilter, setCurrentFilter] = useState("oldest");
  const [isPending, startTransition] = useTransition();
  const [searchValue, setSearchValue] = useState("");
  const [newRoomValue, setNewRoomValue] = useState("");
  const [dialogOpened, setDialogOpened] = useState(false);
  const router = useRouter();

  const handleSearch = (formData) => {
    setSearchValue(formData.get("search"));
  };

  const handleNewRoom = (e) => {
    e.preventDefault();
    startTransition(async () => {
      if (newRoomValue) {
        const res = await fetch("/api/rooms", {
          method: "post",
          body: JSON.stringify({ name: newRoomValue }),
        });
        if (res.ok) {
          router.refresh();
          setDialogOpened(false);
          setNewRoomValue("");
        }
      }
    });
  };
  useEffect(() => {
    setFilteredRooms(() => {
      let updatedRooms = [...rooms];

      // Apply search
      if (searchValue) {
        updatedRooms = updatedRooms.filter((room) =>
          room.name.toLowerCase().includes(searchValue.toLowerCase())
        );
      }

      // Apply filter
      switch (currentFilter) {
        case "responses":
          updatedRooms = sortByResponses(updatedRooms);
          break;
        case "recent":
          updatedRooms = sortByMostRecent(updatedRooms, "createdAt");
          break;
        case "oldest":
          updatedRooms = sortByOldest(updatedRooms, "createdAt");
          break;
        default:
          break;
      }
      return updatedRooms;
    });
  }, [searchValue, currentFilter, rooms]);

  const filters = [
    { label: "Most responses", value: "responses" },
    { label: "Most recent", value: "recent" },
    { label: "Most oldest", value: "oldest" },
  ];
  return (
    <>
      <AnimateUp>
        <section className="mb-3 flex md:justify-end items-center gap-3">
          <form action={handleSearch} className="md:w-fit w-full">
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
                        onClick={() => {
                          setCurrentFilter(filter.value);
                        }}
                        className={
                          currentFilter === filter.value
                            ? "text-blue-primary font-medium"
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
                />
              </span>
              <Button size="inline" variant="none" asChild type="submit">
                <IoSearch className="cursor-pointer" />
              </Button>
            </span>
          </form>
          <Dialog open={dialogOpened} onOpenChange={setDialogOpened}>
            <DialogTrigger asChild>
              <Button variant="primary">New +</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Host a room...</DialogTitle>
                <DialogDescription>
                  A room is a virtual space where you, as the host, set a prompt
                  as the title. Users from around the world can view the room to
                  share their guidance and insights in response.
                </DialogDescription>
              </DialogHeader>
              <form className="space-y-3" onSubmit={handleNewRoom}>
                <input
                  type="text"
                  placeholder="Your prompt..."
                  className={`bg-blue-light p-2 rounded-md focus:outline-blue-primary placeholder:text-sm w-full indent-1`}
                  value={newRoomValue}
                  onChange={(e) => setNewRoomValue(e.target.value)}
                  required
                />
                <Button
                  variant="primary"
                  className="w-fit disabled:cursor-not-allowed"
                  disabled={!newRoomValue || isPending}
                >
                  Host Now
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </section>
      </AnimateUp>
      <RoomsContainer rooms={filteredRooms} />
    </>
  );
}
