"use client";
import { Button } from "@/components/ui/button";
import { FaArrowUp } from "react-icons/fa6";
import { useRouter } from "next/navigation";

import React, { useState } from "react";

export default function AddCommentForm({ id }) {
  const [comment, setComment] = useState("");
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`/api/responses/${id}/comment`, {
      method: "post",
      cache: "no-store",
      body: JSON.stringify({ comment }),
    });
    if (res.ok) {
      setComment("");
      router.refresh();
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center w-full gap-2 sticky bottom-0"
    >
      <input
        type="text"
        placeholder="Reply..."
        className={`bg-blue-light p-2 rounded-2xl focus:outline-blue-primary placeholder:text-sm w-full indent-1 ${
          !comment && "animate-bgPulse"
        }`}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <Button
        variant="primary"
        className={`w-[40px] h-[40px] rounded-full ${
          !comment && "cursor-not-allowed"
        }`}
        disabled={!comment}
      >
        <FaArrowUp />
      </Button>
    </form>
  );
}
