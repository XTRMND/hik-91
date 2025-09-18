"use client";

import React, { PropsWithChildren } from "react";
import { Megaphone } from "lucide-react";

type Props = PropsWithChildren<{
  body?: string;
  className?: string;
}>;

export default function Card({ body, className = "", children }: Props) {
  return (
    <article
      className={[
        "rounded-2xl border border-gray-800 bg-gray-900/90",
        "shadow-[0_10px_30px_rgba(0,0,0,0.35)]",
        "p-6 md:p-7 relative overflow-hidden",
        "transition-transform duration-300 hover:-translate-y-1",
        className,
      ].join(" ")}
    >
      <span className="absolute inset-x-0 top-0 h-[3px] bg-[#2598d7]/70" />
      <div className="text-center">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#2598d7]/15 ring-1 ring-[#2598d7]/30">
          <Megaphone className="h-6 w-6 text-[#2598d7]" />
        </div>
      </div>

      {body && <p className="text-gray-300/95 leading-relaxed mb-4">{body}</p>}
      {children}
    </article>
  );
}

