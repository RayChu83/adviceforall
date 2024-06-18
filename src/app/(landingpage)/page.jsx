import Hero from "@/app/(landingpage)/_components/Hero";
import Benefits from "@/app/(landingpage)/_components/Benefits";
import AnimateUp from "@/app/_components/AnimateUp";
import { FaAngleRight } from "react-icons/fa";
import PreviewRooms from "@/app/_components/PreviewRooms";

import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Landing Page - AdviceForAll",
};

export default async function LandingPage() {
  return (
    <div className="space-y-10">
      <Hero />
      <div className="space-y-1">
        <AnimateUp>
          <h2 className="text-2xl font-semibold flex items-center justify-between">
            Featured rooms:{" "}
            <Link
              href="/rooms"
              className="flex items-center text-sm font-medium text-blue-primary hover:underline"
            >
              See All <FaAngleRight />
            </Link>
          </h2>
        </AnimateUp>
        <PreviewRooms />
      </div>
      <br />
      <Benefits />
    </div>
  );
}
