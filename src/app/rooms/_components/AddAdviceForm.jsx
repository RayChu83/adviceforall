"use client";
import { Button } from "@/components/ui/button";
import { FaArrowUp } from "react-icons/fa6";
import { useRouter } from "next/navigation";

import React, { useState } from "react";

export default function AddAdviceForm({ id }) {
  console.log(id);
  const [value, setValue] = useState("");
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`/api/rooms/${id}/comments`, {
      method: "post",
      cache: "no-store",
      body: JSON.stringify({ message: value }),
    });
    setValue("");
    router.refresh();
  };
  return (
    <form onSubmit={handleSubmit} className="flex items-center w-full gap-2">
      <input
        type="text"
        placeholder="Give Advice..."
        className={`bg-blue-light p-2 rounded-2xl focus:outline-blue-primary placeholder:text-sm w-full ${
          !value && "animate-pulse"
        }`}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button
        variant="primary"
        className="w-[40px] h-[40px] rounded-full"
        disabled={!value}
      >
        <FaArrowUp />
      </Button>
    </form>
  );
}
