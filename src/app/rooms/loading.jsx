import { Skeleton } from "@mui/material";
import React from "react";

export default function RoomsLoading() {
  return (
    <>
      <section className="mb-3 flex md:justify-end items-center gap-3">
        <Skeleton
          variant="rounded"
          width={278}
          height={40}
          className="block flex-grow md:flex-grow-0"
        />
        <Skeleton variant="rounded" width={75} height={40} />
      </section>
      <section className="grid lg:grid-cols-9 sm:grid-cols-6 grid-cols-1 items-start gap-5">
        {Array.from(new Array(12)).map((item, index) => (
          <article className="col-span-3" key={index}>
            <Skeleton variant="rectangular" height={257} />
            <Skeleton />
            <Skeleton width="30%" />
          </article>
        ))}
      </section>
    </>
  );
}
