import Image from "next/image";
import React from "react";

export default function AboutHero() {
  return (
    <section className="grid md:grid-cols-10 grid-cols-1 items-center gap-5">
      <article className="col-span-7">
        <div className="max-w-[600px] space-y-2">
          <h1 className="font-bold md:text-5xl text-[32px] leading-9">
            Our Mission:
          </h1>
          <p>
            AdviceForAll is dedicated bridging the informative gap by providing
            a platform for users to share their insights and offer guidance on a
            wide range of topics from anyone across the globe. Our platform
            empowers users to both learn from and contribute to a wide variety
            of topics, covering everything from personal growth to professional
            development and beyond.
          </p>
        </div>
      </article>
      <section className="col-span-3">
        <Image
          src="/about-hero.svg"
          width={0}
          height={0}
          sizes="100vw"
          alt="Hero Image"
          className="w-full h-auto"
        />
      </section>
      <br />
    </section>
  );
}
