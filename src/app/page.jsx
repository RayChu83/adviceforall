import Hero from "@/app/_components/Hero";
import FeaturedRooms from "@/app/_components/FeaturedRooms";

import React from "react";
import Benefits from "./_components/Benefits";

export default function LandingPage() {
  return (
    <div className="space-y-10">
      <Hero />
      <FeaturedRooms />
      <br />
      <Benefits />
    </div>
  );
}
