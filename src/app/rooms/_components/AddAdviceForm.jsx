"use client";
import { Button } from "@/components/ui/button";
import { FaArrowUp } from "react-icons/fa6";
import { useRouter } from "next/navigation";

import React, { useState } from "react";

export default function AddAdviceForm({ id }) {
  const [message, setMessage] = useState("");
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`/api/rooms/${id}/responses`, {
      method: "post",
      cache: "no-store",
      body: JSON.stringify({ message }),
    });
    setMessage("");
    router.refresh();
  };
  return (
    <form onSubmit={handleSubmit} className="flex items-center w-full gap-2">
      <input
        type="text"
        placeholder="Give Advice..."
        className={`bg-blue-light p-2 rounded-2xl focus:outline-blue-primary placeholder:text-sm w-full indent-1 ${
          !message && "animate-pulse"
        }`}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button
        variant="primary"
        className={`w-[40px] h-[40px] rounded-full ${
          !message && "cursor-not-allowed"
        }`}
        disabled={!message}
      >
        <FaArrowUp />
      </Button>
    </form>
  );
}
