import Hero from "@/app/_components/Hero";
import Benefits from "./_components/Benefits";

import React from "react";
import PreviewRooms from "./_components/PreviewRooms";

export default async function LandingPage() {
  return (
    <div className="space-y-10">
      <Hero />
      <PreviewRooms />
      <br />
      <Benefits />
    </div>
  );
}
