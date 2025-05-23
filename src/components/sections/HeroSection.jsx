import React from "react";
import { Button } from "../ui/button";

function HeroSection() {
  return (
    <>
      <div className="bg-silver w-full h-full">
        <div className="mx-auto max-w-4xl py-24 flex gap-30 items-center">
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl font-bold text-d-grey font-display leading-14">
              Lesson and insights{" "}
              <span className="text-primary">from 8 years</span>
            </h1>
            <p className="text-sm text-gray-600 mt-4">
              Where to grow your business as a photographer: site or social
              media?
            </p>
            <div className="mt-8">
              <Button size="md">Register</Button>
            </div>
          </div>
          <div className="w-1/2">
            <img
              src="/Illustration.png"
              alt="Event"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
