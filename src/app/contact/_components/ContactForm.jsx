import getContact from "@/lib/getContact";
import Link from "next/link";
import { FaTiktok, FaYoutube } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import React from "react";

export default function ContactForm() {
  const { location, email, phone, youtube, tiktok } = getContact();
  return (
    <div className="md:grid grid-cols-2 flex flex-col-reverse max-w-[864px] p-8 m-auto gap-8 bg-blue-darker drop-shadow-md rounded-md">
      <form className="rounded-md flex flex-col gap-2">
        <h2 className="font-semibold text-2xl">Contact form</h2>
        <input
          type="text"
          className="bg-blue-light p-2 rounded-md focus:outline-blue-primary placeholder:text-sm"
          placeholder="Full Name"
        />
        <input
          type="text"
          className="bg-blue-light p-2 rounded-md focus:outline-blue-primary placeholder:text-sm"
          placeholder="Email Address"
        />
        <textarea
          name=""
          id=""
          className="bg-blue-light p-2 rounded-md focus:outline-blue-primary placeholder:text-sm"
          rows={8}
          placeholder="Message"
        ></textarea>
        <Button variant="primary" className="w-fit">
          Submit
        </Button>
      </form>
      <article>
        <h2 className="font-semibold text-2xl">Contact information</h2>
        <p>
          {location}
          <br />
          {email}
          <br />
          {phone}
        </p>
        <span className="flex text-xl gap-2 items-center">
          <Link href={youtube}>
            <FaYoutube />
          </Link>
          <Link href={tiktok}>
            <FaTiktok />
          </Link>
        </span>
        <Image src="/contact.svg" width={350} height={350} alt="Contact" />
      </article>
    </div>
  );
}
