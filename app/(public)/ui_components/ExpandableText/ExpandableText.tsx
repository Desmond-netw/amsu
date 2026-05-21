"use client";

import { useState } from "react";

export default function ExpandableText({
  children,
  maxHeight = 120,
}: {
  children: React.ReactNode;
  maxHeight?: number;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative">
      {/* Text Container */}
      <div
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{
          // We use the style prop for dynamic values that Tailwind can't pre-compile
          maxHeight: expanded ? "1000px" : `${maxHeight}px`,
        }}
      >
        {children}
      </div>

      {/* Gradient Fade (only when collapsed) */}
      {!expanded && (
        <div className="absolute bottom-8 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-2 text-brand_1-700 font-bold hover:text-brand_1-800 transition-colors"
      >
        {expanded ? "Read Less" : "Read More..."}
      </button>
    </div>
  );
}
