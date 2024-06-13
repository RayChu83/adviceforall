import { Skeleton } from "@mui/material";
import React from "react";

export default function RoomDetailLoading() {
  return (
    <section className="overflow-hidden">
      <Skeleton
        variant="text"
        sx={{ fontSize: "1.5rem" }}
        width={120}
        className="mb-1"
      />
      <Skeleton variant="rounded" width={1520} height={390} />
      <Skeleton variant="text" sx={{ fontSize: "1.5rem" }} />
      <Skeleton width="30%" />
      <div className="flex items-center justify-center gap-1 m-3">
        <Skeleton variant="circular" className="min-w-[40px] min-h-[40px]" />
        {Array.from(new Array(3)).map((item, index) => (
          <article
            className={`w-[430px] h-[250px] ${
              index === 1 && "lg:block hidden"
            } ${index === 2 && "md:block hidden"}`}
            key={index}
          >
            <span className="flex items-center gap-2">
              <Skeleton variant="circular" width={40} height={40} />
              <span>
                <Skeleton
                  variant="text"
                  sx={{ fontSize: "1rem" }}
                  width={160}
                />
                <Skeleton
                  variant="text"
                  sx={{ fontSize: ".7rem" }}
                  width={100}
                />
              </span>
            </span>
            {Array.from(new Array(9)).map((item, index) => (
              <Skeleton key={index} />
            ))}
          </article>
        ))}
        <Skeleton variant="circular" className="min-w-[40px] min-h-[40px]" />
      </div>
      <div className="flex items-center justify-center gap-2">
        <Skeleton
          variant="rounded"
          sx={{ borderRadius: "1rem" }}
          height={40}
          className="w-full"
        />

        <Skeleton variant="circular" className="min-w-[40px] min-h-[40px]" />
      </div>
    </section>
  );
}
