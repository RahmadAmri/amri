"use client";

import Image from "next/image";
import { useState } from "react";

export function AvatarImage() {
  const [errored, setErrored] = useState(false);

  return (
    <div className="relative h-16 w-16 sm:h-20 sm:w-20 overflow-hidden rounded-xl ring-1 ring-border bg-muted/10 shadow-sm shrink-0">
      {errored ? (
        <div className="flex h-full w-full items-center justify-center text-xs font-medium">
          RA
        </div>
      ) : (
        <Image
          src="/assets/amri.jpg" // ensure: public/assets/amri.jpg exists (case-sensitive)
          alt="Rahmad Amri"
          fill
          sizes="(min-width: 640px) 80px, 64px"
          className="object-cover"
          priority
          onError={() => setErrored(true)}
        />
      )}
    </div>
  );
}
