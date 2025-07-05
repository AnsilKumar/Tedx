"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Timeline } from "@/components/ui/timeline";

export function Event() {
  const eventData = [
    { title: "09:30 AM", content: <p className="font-bold min-w-20">Inauguration & TEDx Rules</p> },
    { title: "10:00 AM", content: <p className="font-bold min-w-20">Speaker 1</p> },
    { title: "10:25 AM", content: <p className="font-bold min-w-20">Speaker 2</p> },
    { title: "11:00 AM", content: <p className="font-bold min-w-20">Speaker 3</p> },
    { title: "11:25 AM", content: <p className="font-bold min-w-20">Speaker 4</p> },
    { title: "12:00 PM", content: <p className="font-bold min-w-20">Interactive Session 1</p> },
    { title: "12:40 PM", content: <p className="font-bold min-w-20">Lunch Break</p> },
    { title: "02:00 PM", content: <p className="font-bold min-w-20">Speaker 5</p> },
    { title: "02:25 PM", content: <p className="font-bold min-w-20">Speaker 6</p> },
    { title: "03:00 PM", content: <p className="font-bold min-w-20">Speaker 7</p> },
    { title: "03:25 PM", content: <p className="font-bold min-w-20">Speaker 8</p> },
    { title: "03:50 PM", content: <p className="font-bold min-w-20">Interactive Session 2</p> },
    { title: "04:30 PM", content: <p className="font-bold min-w-20">Valedictory Ceremony</p> },
  ];


  const SimpleSchedule = () => (
    <div className="md:hidden px-4 py-10 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-1">Event Schedule</h1>
        <div className="w-full h-1 bg-ted-red mb-4"></div>
      </div>

      <div className="space-y-4">
        {eventData.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-3 rounded border border-white/10 bg-white/5 p-2   content-center"
          >
            <div className="flex flex-col items-center justify-center">
              <span className="text-ted-red text-[28px] leading-none">•</span>
            </div>

            <div className="flex text-center h-full justify-center items-center">
              <span className="text-white/70 text-sm font-medium text-center">{item.title}</span>
              {item.content && (
                <div className="text-white pl-4 text-center text-base ">{item.content}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div id="event" className="flex flex-col overflow-hidden min-h-screen">
     
      <SimpleSchedule />

  
      <div className="hidden md:block">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white px-4 sm:px-6 md:px-8">
                <span className="text-4xl sm:text-5xl uppercase md:text-6xl lg:text-7xl xl:text-8xl font-bold mt-1 leading-none">
                  Event Schedule
                </span>
              </h1>
            </>
          }
        >
          <div className="w-full max-w-5xl mx-auto space-y-4 sm:space-y-6 px-4 sm:px-6 md:px-8">
            <Timeline data={eventData} />
          </div>
        </ContainerScroll>
      </div>
    </div>
  );
}
