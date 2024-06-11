"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS, BLUR_IN } from "@/lib/transitions";
import getFaqs from "@/lib/getFaqs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import React from "react";

export default function FaqPage() {
  const faqs = getFaqs();
  return (
    <section>
      <motion.article
        className="text-center"
        initial="hidden"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <motion.h1
          className="text-5xl font-bold"
          variants={FADE_UP_ANIMATION_VARIANTS}
        >
          FAQ&apos;S
        </motion.h1>
        <motion.p variants={FADE_UP_ANIMATION_VARIANTS}>
          Looking for our contact information? Check it out{" "}
          <Link href="/contact" className="text-blue-primary">
            here
          </Link>
        </motion.p>
      </motion.article>
      <br />
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        variants={BLUR_IN}
        className="max-w-[864px] p-8 bg-blue-darker drop-shadow-md rounded-md m-auto pt-2"
      >
        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
}
