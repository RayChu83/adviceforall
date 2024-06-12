"use client";
import getContact from "@/lib/getContact";
import Link from "next/link";
import { FaTiktok, FaYoutube } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import React, { useState, useTransition } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isPending, startTransition] = useTransition();
  const { location, email, phone, youtube, tiktok } = getContact();
  const handleAction = (e) => {
    e.preventDefault();
    startTransition(async () => {
      const [name, email, message] = [
        formData.name,
        formData.email,
        formData.message,
      ];
      const res = await fetch("/api/contact", {
        method: "post",
        body: JSON.stringify({ name, email, message }),
      });
      if (res.ok) {
        setFormData({ name: "", email: "", message: "" });
      }
    });
  };
  return (
    <div className="md:grid grid-cols-2 flex flex-col-reverse max-w-[864px] p-8 m-auto gap-8 bg-blue-darker drop-shadow-md rounded-md">
      <form className="rounded-md flex flex-col gap-2" onSubmit={handleAction}>
        <h2 className="font-semibold text-2xl">Contact form</h2>
        <input
          name="name"
          type="text"
          className="bg-blue-light p-2 rounded-md focus:outline-blue-primary placeholder:text-sm"
          placeholder="Full Name"
          value={formData.name}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
        />
        <input
          name="email"
          type="text"
          className="bg-blue-light p-2 rounded-md focus:outline-blue-primary placeholder:text-sm"
          placeholder="Email Address"
          value={formData.email}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
        />
        <textarea
          name="message"
          className="bg-blue-light p-2 rounded-md focus:outline-blue-primary placeholder:text-sm"
          rows={8}
          placeholder="Message"
          value={formData.message}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
        ></textarea>
        <Button variant="primary" className="w-fit" disabled={isPending}>
          Submit
        </Button>
      </form>
      <article>
        <h2 className="font-semibold text-2xl">Contact information</h2>
        <p className="text-sm">
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
