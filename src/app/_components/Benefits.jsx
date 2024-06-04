import getBenefits from "@/lib/getBenefits";
import Image from "next/image";
import React from "react";

export default function Benefits() {
  const benefits = getBenefits();
  return (
    <div className="space-y-10 max-w-[1280px] m-auto">
      {benefits.map((benefit, index) => (
        <section
          key={benefit.imgSrc}
          className="grid md:grid-cols-2 grid-cols-1 items-center gap-x-10 gap-y-5"
        >
          {index % 2 === 0 && <RenderImageBenefit benefit={benefit} />}
          <article>
            <h2 className="font-semibold text-3xl">{benefit.title}</h2>
            <p>{benefit.description}</p>
          </article>
          {index % 2 === 1 && <RenderImageBenefit benefit={benefit} />}
        </section>
      ))}
    </div>
  );
}

function RenderImageBenefit({ benefit }) {
  return (
    <div className="flex justify-center">
      <Image
        src={benefit.imgSrc}
        width={400}
        height={400}
        alt={benefit.title}
      />
    </div>
  );
}
