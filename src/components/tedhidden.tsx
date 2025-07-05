"use client";
import { useState, useEffect } from "react";
import { MaskContainer } from "@/components/ui/svg-mask-effect";
import { TypewriterEffect } from "@/components/ui/typewriter";
import Navbar from "./Navbar";

export function TEDxhidden() {
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return (
    <div className="relative min-h-screen flex justify-center items-center">
      <div className="pointer-events-none absolute inset-x-0 z-10 bottom-0 h-1/12 bg-gradient-to-t from-black"></div>
      <Navbar isHovered={isHovered} />
      <div className="flex min-h-screen w-full items-center justify-center overflow-hidden">
        <MaskContainer
          onHoverChange={setIsHovered}
          revealText={
            <div className="w-full max-w-full px-4 text-center">
              {mounted && (
                <div className="flex flex-col items-center">
                  {/* Desktop view (lg and up) - two lines */}
                  <div className="hidden lg:block">
                    <TypewriterEffect
                      words={[
                        { text: "An", className: "text-white " },
                        { text: "Idea.", className: "text-white " },
                        { text: "A", className: "text-white" },
                        { text: "Story.", className: "text-white" },
                        { text: "A", className: "text-white" },
                        { text: "Transformation", className: "text-ted-red" },
                      ]}
                      onHoverChange={isHovered}
                      className="text-white text-5xl sm:text-5xl md:text-6xl lg:text-[6rem] xl:text-9xl leading-tight uppercase"
                      cursorClassName="bg-ted-red"
                    />
                  
                  </div>
                  {/* Mobile view (base to md) - three lines */}
                  <div className="lg:hidden flex flex-col items-center">
                    <TypewriterEffect
                      words={[
                        { text: "An", className: "text-white " },
                        { text: "Idea.", className: "text-white " },

                        { text: "A", className: "text-white" },
                        { text: "Story.", className: "text-white" },

                        { text: "A", className: "text-white" },
                        { text: "Transformation", className: "text-ted-red" },
                      ]}
                      onHoverChange={isHovered}
                      className="text-white text-5xl sm:text-5xl md:text-6xl leading-tight uppercase"
                      cursorClassName="bg-ted-red"
                    />
                   </div>
                </div>
              )}
            </div>
          }
          className="min-h-screen w-full text-black text-center"
        >
          <div className="flex justify-center items-center w-full h-screen">
            <div className="absolute min-w-[800px] flex flex-col h-full justify-center items-center">
              <h1 className="relative text-white font-bold leading-tight w-full text-6xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[10rem]">
                <span className="text-ted-red font-black">TED</span>
                <span className="absolute text-ted-red font-black text-[0.5em] ">x</span>{"     "}
                <span className="font-light text-black ml-4">AIET</span>
              </h1>
            </div>
          </div>
        </MaskContainer>
      </div>
    </div>
  );
}