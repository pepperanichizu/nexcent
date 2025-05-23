import React from "react";
import { Button } from "../ui/button";
import RightIcon from "../../assets/icons/24/RightIcon";

function Demo() {
  return (
    <>
      <div className="bg-silver h-full w-full">
        <div className="mx-auto max-w-4xl py-24 flex flex-col items-center gap-4">
          <h1 className="font-semibold text-5xl text-center text-black">
            Pellentesque suscipit fringilla libero eu.
          </h1>
          <Button>
            Get a demo <RightIcon color="#ffffff" />
          </Button>
        </div>
      </div>
    </>
  );
}

export default Demo;
