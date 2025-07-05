"use client";
import { Marquee } from "@/components/magicui/marquee";

export default function SecondMarquee() {
  return (
    <Marquee className="overflow-hidden whitespace-nowrap py-4 mt-8 mb-16 md:mb-32 border-y border-neutral-800">
      <div className="animate-marquee flex gap-16 text-white text-lg sm:text-xl font-medium uppercase tracking-widest">
        <span className="hover:animate-pulse hover:text-red-500 transition duration-300">
           Inspiring Talks
        </span>
        <span className="opacity-50">|</span>
        <span className="hover:animate-pulse hover:text-red-500 transition duration-300">
           Ideas Worth Spreading
        </span>
        <span className="opacity-50">|</span>
        <span className="hover:animate-pulse hover:text-red-500 transition duration-300">
           Global Speakers
        </span>
        <span className="opacity-50">|</span>
        <span className="hover:animate-pulse hover:text-red-500 transition duration-300">
           Live Performances
        </span>
        <span className="opacity-50">|</span>
        <span className="hover:animate-pulse hover:text-red-500 transition duration-300">
           AIET Mijar
        </span>
        <span className="opacity-50">|</span>
        <span className="hover:animate-pulse hover:text-red-500 transition duration-300">
           Book Your Seats
        </span>
      </div>
    </Marquee>
  );
}
