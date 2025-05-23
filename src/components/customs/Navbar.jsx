import React from "react";
import { Button } from "../ui/button";
import RightIcon from "../../assets/icons/24/RightIcon";

export default function Navbar() {
  return (
    <>
      <div className="w-full bg-white py-6 max-w-4xl mx-auto flex justify-between">
        <img src="/Logo.svg" />
        <div className="flex gap-6 items-center">
          <a href="#" className="text-black">
            Home
          </a>
          <a href="#" className="text-black">
            Features
          </a>
          <a href="#" className="text-black">
            Community
          </a>
          <a href="#" className="text-black">
            Blog
          </a>
          <a href="#" className="text-black">
            Pricing
          </a>
          <Button size="md">
            Register Now
            <RightIcon color={"#ffffff"} />
          </Button>
        </div>
      </div>
    </>
  );
}
