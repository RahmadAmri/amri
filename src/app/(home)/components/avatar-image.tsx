"use client";

import Image from "next/image";

export function AvatarImage() {
  return (
    <div className="relative h-16 w-16 sm:h-20 sm:w-20 shrink-0 overflow-hidden rounded-lg ring-1 ring-border bg-white">
      <Image
        src="/assets/amri.png"
        alt="Rahmad Amri"
        fill
        priority
        className="object-cover"
        sizes="80px"
      />
    </div>
  );
}
