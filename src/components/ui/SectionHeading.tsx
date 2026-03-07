import React from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  className = ""
}: SectionHeadingProps) {
  const alignmentClasses = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3 mb-12 ${alignmentClasses} ${className}`}>
      <h2 className="font-display text-4xl md:text-5xl font-bold text-stone-900">
        {title}
      </h2>
      {subtitle && (
        <p className="font-body text-lg text-muted max-w-2xl">
          {subtitle}
        </p>
      )}
      <div className="w-20 h-1 bg-gold rounded-full" />
    </div>
  );
}
