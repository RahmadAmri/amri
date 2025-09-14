"use client";

import Image from "next/image";

export function AvatarImage() {
  return (
    <div className="relative h-10 w-10 sm:h-20 sm:w-20 overflow-hidden rounded-xl ring-1">
      <Image
        src="/assets/amri.png"
        alt="Rahmad Amri"
        fill
        priority
        className="object-cover"
      />
    </div>
  );
}
