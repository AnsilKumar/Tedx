"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface TooltipButtonProps {
  children: ReactNode;
  tooltip?: string;
  hoverText?: string;
  hoverLink?: string;
  className?: string;
  target?:string;
}

export default function TooltipButton({
  children,
  tooltip = "Tooltip",
  hoverText,
  hoverLink,
  className,
  target,
}: TooltipButtonProps) {
  return (
    <div
      data-tooltip={tooltip}
      className={cn(
        "relative min-w-[160px] cursor-none h-10 bg-ted-red text-white text-center transition-all duration-300 overflow-hidden group ",
        className
      )}
    >
      {/* Tooltip */}
      <div className="absolute w-max cursor-none max-w-xs px-3 py-1 bg-gray-700 text-white text-sm font-semibold rounded flex items-center justify-center transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible bottom-[calc(100%+12px)] left-1/2 -translate-x-1/2 z-10">
        {tooltip}
        <div className="absolute w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-gray-700 bottom-[-8px] left-1/2 -translate-x-1/2"></div>
      </div>

      {/* Main content */}
      <div className="absolute inset-0 cursor-none flex items-center justify-center transition-all duration-300 group-hover:-translate-y-full">
        {children}
      </div>

      {/* Hover slide-up text */}
      <div className="absolute inset-0 flex cursor-none items-center justify-center transition-all duration-300 translate-y-full group-hover:translate-y-0">
        {hoverLink ? (
          <Link href={hoverLink} className="font-bold cursor-none text-white" target={target} >
            {hoverText}
          </Link>
        ) : (
          <p className="font-bold cursor-none text-white">{hoverText}</p>
        )}
      </div>
    </div>
  );
}
