"use client";
import { Button } from "@/components/ui/button";
import { FaArrowUp } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/transitions";

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
    if (await res.ok) {
      setMessage("");
      router.refresh();
    }
  };
  return (
    <motion.form
      onSubmit={handleSubmit}
      className="flex items-center w-full gap-2"
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      <motion.input
        variants={FADE_UP_ANIMATION_VARIANTS}
        type="text"
        placeholder="Give Advice..."
        className={`bg-blue-light p-2 rounded-2xl focus:outline-blue-primary placeholder:text-sm w-full indent-1 ${
          !message && "animate-pulse"
        }`}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <motion.span variants={FADE_UP_ANIMATION_VARIANTS}>
        <Button
          variant="primary"
          className={`w-[40px] h-[40px] rounded-full ${
            !message && "cursor-not-allowed"
          }`}
          disabled={!message}
        >
          <FaArrowUp />
        </Button>
      </motion.span>
    </motion.form>
  );
}
