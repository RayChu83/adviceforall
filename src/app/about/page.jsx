import React from "react";
import AboutHero from "@/app/about/_components/AboutHero";
import HowItWorks from "./_components/HowItWorks";
import PreviewRooms from "../_components/PreviewRooms";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <HowItWorks />
      <br />
      <PreviewRooms />
    </>
  );
}
