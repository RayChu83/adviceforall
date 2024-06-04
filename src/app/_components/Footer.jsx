import Link from "next/link";
import { BiWorld } from "react-icons/bi";
import { FaQuestion } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import getContact from "@/lib/getContact";

import React from "react";

export default function Footer() {
  const { email, phone, youtube, tiktok } = getContact();
  return (
    <>
      <div class="w-full overflow-hidden leading-0 rotate-180">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="md:w-full w-fit relative block h-[75px]"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="fill-blue-darker"
          ></path>
        </svg>
      </div>
      <footer className="p-10 bg-blue-darker">
        <span className="max-w-[1560px] m-auto flex md:justify-between justify-center items-start gap-5 flex-wrap">
          <article className="space-y-1">
            <h3 className="flex items-center gap-2 text-2xl font-bold md:justify-start justify-center">
              <BiWorld className="text-3xl " />
              AdviceForAll
            </h3>
            <p className="text-gray-primary">
              © AdviceForAll, all rights reserved
            </p>
          </article>
          <article className="flex flex-col gap-1 md:text-right text-center">
            <h3 className="font-semibold text-2xl">Contact Us</h3>
            <p>{email}</p>
            <p>{phone}</p>
            <span className="flex text-xl gap-2 md:justify-end justify-center">
              <Link href="/contact">
                <FaQuestion className="text-white" />
              </Link>
              <Link href={youtube}>
                <FaYoutube className="text-white" />
              </Link>
              <Link href={tiktok}>
                <FaTiktok className="text-white" />
              </Link>
            </span>
          </article>
        </span>
      </footer>
    </>
  );
}
