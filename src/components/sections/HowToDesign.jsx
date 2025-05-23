import React from "react";
import { Button } from "../ui/button";

function HowToDesign() {
  return (
    <>
      <div className="mx-auto max-w-4xl w-full h-full py-24">
        <div className="flex flex-row justify-between items-center">
          <div className="w-1/3">
            <img
              src="/pana.png"
              alt="Event"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-1/2">
            <h1 className="font-semibold text-d-grey text-4xl">
              How to design your site footer like we did
            </h1>
            <p className="text-grey text-sm mt-4">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at libero ultrices
              mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
              dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
              ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
              commodo faucibus efficitur quis massa. Praesent felis est, finibus
              et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
              ipsum id gravida.
            </p>
            <div className="mt-4">
              <Button size="md">Learn More</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HowToDesign;
