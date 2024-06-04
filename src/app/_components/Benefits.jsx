import getBenefits from "@/lib/getBenefits";
import Image from "next/image";
import React from "react";

export default function Benefits() {
  const benefits = getBenefits();
  return (
    <div className="space-y-10">
      {benefits.map((benefit, index) => (
        <section
          key={benefit.imgSrc}
          className="grid md:grid-cols-2 grid-cols-1 items-center gap-x-10 gap-y-5"
        >
          <span className={`${index % 2 === 0 ? "block" : "md:hidden block"}`}>
            <RenderImageBenefit benefit={benefit} />
          </span>
          <article>
            <h2 className="font-semibold text-3xl">{benefit.title}</h2>
            <p>{benefit.description}</p>
          </article>
          <span className={`${index % 2 === 1 ? "md:block hidden" : "hidden"}`}>
            <RenderImageBenefit benefit={benefit} />
          </span>
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
