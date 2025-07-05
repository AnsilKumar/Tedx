"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";

export function ThreeDMarquees() {
  const images = [
    "/cardimages/TED2024_20240416_2JR7866-medium.jpg",
    "/cardimages/TED2024_20240416_1JR7027-medium.jpg",
    "/cardimages/TED2024_20240416_2JR7480-medium.jpg",
    "/cardimages/TED2024_20240416_2JT4228-medium.jpg",
    "/cardimages/TED2024_20240416_1JR6768-medium.jpg",
    "/cardimages/TED2024_20240416_2JR6860-medium.jpg",
    "/cardimages/TED2024_20240416_1GT4415-medium.jpg",
    "/cardimages/TED2024_20240416_2GT5202-medium.jpg",
    "/cardimages/TED2024_20240416_1JR6556-medium.jpg",
    "/cardimages/TED2024_20240417_2RL0828-medium.jpg",
    "/cardimages/TED2024_20240417_1JT8241-medium.jpg",
    "/cardimages/TED2024_20240417_1GT8186-medium.jpg",
    "/cardimages/TED2024_20240417_2GT9364-medium.jpg",
    "/cardimages/TED2024_20240417_1GT8203-medium.jpg",
    "/cardimages/TED2024_20240418_2RL5014-medium.jpg",
    "/cardimages/TED2024_20240418_2RL5505-medium.jpg",
    "/cardimages/TED2024_20240418_1RL1263-medium.jpg",
    "/cardimages/TED2024_20240416_3GT9026-medium.jpg",
    "/cardimages/TED2024_20240418_2RL4026-medium.jpg",
    "/cardimages/TED2024_20240418_1JR3058-medium.jpg",
    "/cardimages/TED2024_20240418_2JR1729-medium.jpg",
    "/cardimages/TED2024_20240418_2RL3500-medium.jpg",
    "/cardimages/TED2024_20240418_2JR1932-medium.jpg",
    "/cardimages/image4.jpg",
    "/cardimages/image3.jpg",
    "/cardimages/image2.jpg",
    "/cardimages/image1.jpg",
    "/cardimages/AdobeStock_664471339_Preview.jpeg",
    "/cardimages/AdobeStock_675525288_Preview.jpeg",
    "/cardimages/AdobeStock_1247007282_Preview.jpeg"
  ];

  return (

    <div className="md:h-screen mb-32 sm:mb-0  relative flex justify-center items-center overflow-hidden">
      <div className="absolute flex w-full h-full justify-center items-center">
        <h1 className=" relative text-white font-bold leading-tight text-6xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[10rem]">
          <span className="text-ted-red font-black">TED</span>
         <span className="absolute text-ted-red font-black text-[0.5em] ">x</span>{"     "} 
          <span className="font-light">AIET</span>
        </h1>
      </div>
      <div className="mx-auto sm:w-full">
        <ThreeDMarquee 
          images={images} 
          className="opacity-30 h-[200px] sm:h-screen md:h-screen"
        />
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/6 bg-gradient-to-b from-black"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/6 bg-gradient-to-t from-black"></div>
    </div>
  );
}