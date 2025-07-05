"use client";
import { useEffect } from "react";
import Image from "next/image";
import { animate, scroll } from "motion";

type Speaker = {
  name: string;
  image: string;
  description: string;
};

const speakers: Speaker[] = [
  {
    name: "Lt Gen A Arun",
    image: "/speaker/arun.png",
    description:
      "A soldier, storyteller, and leader—Lt Gen A Arun turns battle scars into life lessons, inspiring youth with courage, clarity, and a spark for service.",
  },
  {
    name: "Arjun Deshpande",
    image: "/speaker/arjun.jpeg",
    description:
      "Disrupting pharma at 16, Arjun Deshpande built Generic Aadhaar to make medicines affordable, youth-led innovation that's healing India one pill at a time.",
  },
  {
    name: "Abhishek Mishra",
    image: "/speaker/abhishek-mishras.jpeg",
    description:
      "Creator of 'In Other Words', Abhishek decodes song lyrics and scenes with heart and depth making music more meaningful, one beautifully explained verse at a time.",
  },
  {
    name: "Janaki Anand",
    image: "/speaker/janki.jpeg",
    description:
      "Zooming into history on skateboard, Janaki Anand is India's youngest skateboarding prodigy, proving that big dreams roll faster with fearless passion and grit.",
  },
  {
    name: "Dr. Achyuthan Eswar",
    image: "/speaker/achutank.jpeg",
    description:
      "Doctor turned food rebel! Dr. Achyuthan serves up plant-based power through Sampoorna Ahara, mixing tradition, science, and tasty transformation on every plate.",
  },
];


export default function Speakers() {
  useEffect(() => {
    const items = document.querySelectorAll(".img-container");

const MobileSpeakers = () => (
  <div className="md:hidden space-y-24 px-4 py-8">
    {speakers.map((speaker, index) => (
      <div
        key={index}
        className="flex flex-col items-center gap-6 border p-8 border-ted-red rounded"
      >
        <div className="w-[250px] h-[250px] relative">
          <Image
            src={speaker.image}
            alt={speaker.name}
            width={250}
            height={250}
            className="w-full h-full object-contain grayscale"
          />
        </div>
        <div className=" relative ">
          <h3 className="text-2xl font-mono font-bold mb-1">
            #{String(index + 1).padStart(1, "")}
          </h3>
          <h4 className="text-3xl font-bold mb-3">{speaker.name}</h4>
          <p className="text-gray-300 leading-relaxed">{speaker.description}</p>
          <div className="  justify-end flex gap-3 lg:gap-4   content-between cursor-none">
            {speaker.links && speaker.links.map((link) => (
              <a
                key={link.alt}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 p-2 bg-black border  duration-500 border-black hover:border-ted-red transition-all cursor-none "
              >
                <Image
                  src={link.icon}
                  alt={link.alt}
                  width={24}
                  height={24}
                  className="w-5 h-5 lg:w-6 lg:h-6 cursor-none"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
);



    scroll(
      animate(".img-group", {
        transform: ["none", `translateX(-${items.length - 1}00vw)`],
      }),
      { target: document.querySelector(".img-group-container") }
    );

    scroll(
      animate(".progress", { scaleX: [0, 1] }),
      { target: document.querySelector(".img-group-container") }
    );

    scroll(
      animate(".desktop-heading", {
        opacity: [1, 0],
        scale: [1, 0.8],
      }),
      { target: document.querySelector(".img-group-container") }
    );
  }, []);

  return (
    <section className="relative text-white">
      <div className="md:hidden px-4 py-8 space-y-10">
        <div className="py-4 flex items-center justify-center border-b border-ted-red">
          <h1 className="text-4xl font-bold uppercase">Speakers</h1>
        </div>

        {speakers.map((speaker, index) => (
          <div
            key={index}
            className="border border-ted-red rounded p-12 bg-black/30 backdrop-blur-sm"
          >
            <div className="w-full h-64 relative rounded-full overflow-hidden border-2 border-ted-red mb-4">
              <Image
                src={speaker.image}
                alt={speaker.name}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-lg font-mono text-ted-red mb-1">
              #{String(index + 1).padStart(2, "0")}
            </h3>
            <h4 className="text-2xl font-bold mb-3">{speaker.name}</h4>
            <p className="text-gray-300 leading-relaxed text-[16px]">
              {speaker.description}
            </p>
          </div>
        ))}
      </div>

    
      <div className="hidden md:block">
        <div className="top-15 left-0 w-full flex items-center justify-center py-6 z-50">
          <h1 className="desktop-heading text-8xl lg:text-9xl font-bold uppercase">
            Speakers
          </h1>
        </div>
        <div className="img-group-container h-[300vh] pt-[80px] relative">
          <div className="sticky top-0 overflow-hidden h-screen">
            <ul className="img-group flex h-full">
              {speakers.map((speaker, index) => (
                <li
                  key={index}
                  className="img-container w-screen flex-shrink-0 flex items-center justify-center px-18"
                >
                  <div className="flex items-center gap-16 max-w-6xl w-full border border-ted-red p-16">
                    <div className="relative w-96 h-96 rounded-full overflow-hidden border-4 border-ted-red">
                      <Image
                        src={speaker.image}
                        alt={speaker.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-mono font-bold mb-2 text-ted-red">
                        #{String(index + 1).padStart(2, "0")}
                      </h3>
                      <h4 className="text-5xl font-bold mb-6">
                        {speaker.name}
                      </h4>
                      <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                        {speaker.description}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="progress sticky left-0 right-0 h-[5px] bg-[#9911ff] bottom-[50px] origin-left scale-x-0" />
      </div>
    </section>
  );
}


