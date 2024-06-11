"use client";
import getBenefits from "@/lib/getBenefits";
import Image from "next/image";
import { motion } from "framer-motion";
import { MULTIDIRECTION_SLIDE_VARIANTS } from "@/lib/transitions";

import React from "react";

export default function Benefits() {
  const benefits = getBenefits();
  return (
    <div className="space-y-10">
      {benefits.map((benefit, index) => (
        <motion.section
          key={benefit.imgSrc}
          className="grid md:grid-cols-2 grid-cols-1 items-center gap-x-10 gap-y-5"
          initial={index % 2 === 0 ? "rightHidden" : "leftHidden"}
          whileInView="visible"
          variants={MULTIDIRECTION_SLIDE_VARIANTS}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
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
        </motion.section>
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
