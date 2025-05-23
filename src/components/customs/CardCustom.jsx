import React from "react";
import { Button } from "../ui/button";
import RightIcon from "../../assets/icons/24/RightIcon";

export default function CardCustom(props) {
  return (
    <>
      <div className="relative overflow-visible">
        <div className="relative aspect-square">
          <img
            src={props.image}
            className="relative object-cover w-full h-full rounded-2xl"
          />
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-silver p-4 rounded-xl shadow-lg w-11/12">
          <div className="flex flex-col justify-between items-center">
            <h3 className="text-sm font-medium text-center text-gray-800 leading-snug">
              {/* Creating Streamlined Safeguarding Processes with OneRen */}
                {props.title}
            </h3>
            <Button variant="ghost">
              Read more <RightIcon color="#4CAF4F" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
