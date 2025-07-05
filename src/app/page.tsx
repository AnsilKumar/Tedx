
"use client";

import { Event } from "@/components/event";

import { ThreeDMarquees } from "@/components/slider";
import Speaker from "@/components/speaker";

import { TEDxhidden } from "@/components/tedhidden";

import Marquee from "@/components/secondmarquee";
import Ticket from "@/components/ticket";
import Timer from "@/components/timer";
import { WobbleCards } from "@/components/why";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Whatistedx from "@/components/whatistedx";


export default function Home() {
  return (
    <div className="bg-black">


     


      
     

     

      

    

     
      
  
     

      



 
 

      <TEDxhidden/>
      <WobbleCards/>

             
      
      <Whatistedx/>
        <Marquee />

      <ThreeDMarquees/>
      <Event/>
      <Speaker/>
      <Timer />
      <Ticket/>
           {/* <IntroSection /> */}
      {/* <MarqueeDemo/> */}
      {/* https://magicui.design/docs/components/hyper-text */}
      {/* {https://ui.aceternity.com/components/lamp-effect} */}
      {/* https://ui.aceternity.com/components/world-map*/}
      <Link href="/tickets" className="fixed bottom-4 right-4 z-50 md:hidden" aria-label="Book a Ticket">
        <Button className="bg-ted-red text-white shadow-lg rounded-sm px-4 py-6 text-lg font-bold flex items-center gap-2">
          <Image src="/vip.png" alt="VIP Ticket" width={28} height={28} className="w-8 h-8" />
          {/* Book a Ticket */}
        </Button>
      </Link>

    </div>
  );
}
