import React from "react";

interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  className?: string;
  variant?: "text" | "card" | "image";
}

export function Skeleton({ width, height, className = "", variant = "text" }: SkeletonProps) {
  const baseStyles = "bg-cream-200 rounded animate-pulse";
  
  const variantStyles = {
    text: "h-4",
    card: "h-48 rounded-xl",
    image: "h-48 rounded-xl"
  };

  const style: React.CSSProperties = {};
  if (width) {
    style.width = typeof width === "number" ? `${width}px` : width;
  }
  if (height) {
    style.height = typeof height === "number" ? `${height}px` : height;
  }

  return (
    <div
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      style={style}
      aria-hidden="true"
    >
      <div className="w-full h-full bg-gradient-to-r from-cream-200 via-cream-100 to-cream-200 bg-[length:200%_100%] animate-shimmer" />
    </div>
  );
}
