"use client";

import React, { useState } from "react";
import Image from "next/image";

export function TeamPhoto() {
  const [imgError, setImgError] = useState(false);
  const teamImageUrl = "/images/about/team-photo.jpg";

  return (
    <div className="relative w-full h-full min-h-[500px] rounded-2xl shadow-xl overflow-hidden">
      {!imgError ? (
        <Image
          src={teamImageUrl}
          alt="ONECALL FIELD SERVICES LLC professional team"
          fill
          className="object-cover"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="w-full h-full bg-surface-100 flex items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-teal/20 flex items-center justify-center">
            <span className="font-display text-5xl font-bold text-teal">H</span>
          </div>
        </div>
      )}
    </div>
  );
}
