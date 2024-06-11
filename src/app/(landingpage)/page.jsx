import Hero from "@/app/(landingpage)/_components/Hero";
import Benefits from "@/app/(landingpage)/_components/Benefits";
import AnimateUp from "@/app/_components/AnimateUp";

import React from "react";
import PreviewRooms from "@/app/_components/PreviewRooms";

export const metadata = {
  title: "Landing Page - AdviceForAll",
};

export default async function LandingPage() {
  return (
    <div className="space-y-10">
      <Hero />
      <span className="space-y-1">
        <AnimateUp>
          <h2 className="text-2xl font-semibold">Featured rooms:</h2>
        </AnimateUp>
        <PreviewRooms />
      </span>
      <br />
      <Benefits />
    </div>
  );
}
