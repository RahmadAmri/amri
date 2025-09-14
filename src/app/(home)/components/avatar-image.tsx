"use client";

import Image from "next/image";

export function AvatarImage() {
  return (
    <div className="relative h-16 w-16 sm:h-20 sm:w-20 overflow-hidden rounded-xl ring-1 ring-border bg-muted/10 shadow-sm shrink-0">
      <Image
        src="/assets/Amri.jpg"
        alt="Rahmad Amri"
        fill
        priority
        sizes="(min-width:640px) 80px, 64px"
        className="object-cover"
      />
    </div>
  );
}
