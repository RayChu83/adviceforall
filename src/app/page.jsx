import Hero from "@/app/_components/Hero";
import FeaturedRooms from "@/app/_components/FeaturedRooms";
import Benefits from "./_components/Benefits";

import React from "react";

export default async function LandingPage() {
  return (
    <div className="space-y-10">
      <Hero />
      <FeaturedRooms />
      <br />
      <Benefits />
    </div>
  );
}
