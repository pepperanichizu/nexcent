import React from "react";
import { Button } from "../ui/button";

export default function UnseenSection() {
  return (
    <>
      <div className="mx-auto max-w-4xl w-full h-full py-24">
        <div className="flex flex-row justify-between items-center">
          <div className="w-1/3">
            <img
              src="/Phone.png"
              alt="Event"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-1/2">
            <h1 className="font-semibold text-d-grey text-4xl">
              The unseen of spending three years at Pixelgrade
            </h1>
            <p className="text-grey text-sm mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
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
