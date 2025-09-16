"use client";
import React from "react";
import { useCalendlyEventListener, InlineWidget } from "react-calendly";

const ScheduleMeeting = () => {
  useCalendlyEventListener({
    onProfilePageViewed: () => console.log("onProfilePageViewed"),
    onDateAndTimeSelected: () => console.log("onDateAndTimeSelected"),
    onEventTypeViewed: () => console.log("onEventTypeViewed"),
    onEventScheduled: (e) => console.log(e.data.payload),
  });
  return (
    <section className="px-4 sm:px-6 lg:px-[100px] py-10 sm:py-20 bg-background-white h-screen hide-scrollbar">
      <InlineWidget url="https://calendly.com/bravotek-us/30min" className="container h-full hide-scrollbar" />
    </section>
  );
};

export default ScheduleMeeting;
