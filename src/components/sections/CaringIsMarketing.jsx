import React from "react";
import CardCustom from "../customs/CardCustom";

function CaringIsMarketing() {
  const communityData = [
    {
      image: "community-1.jpg",
      title: "Creating Streamlined Safeguarding Processes with OneRen",
    },
    {
      image: "community-2.jpg",
      title:
        "What are your safeguarding responsibilities and how can you manage them?",
    },
    {
      image: "community-3.jpg",
      title: "Revamping the Membership Model with Triathlon Australia",
    },
  ];

  return (
    <>
      <div className="mx-auto max-w-4xl w-full h-full py-24">
        <h1 className="font-semibold text-center text-d-grey text-3xl">
          Caring is the new marketing
        </h1>
        <p className="text-grey text-sm mx-auto text-center mt-4">
          The Nextcent blog is the best place to read about the latest
          membership insights, trends and more. See who's joining the community,
          read about how our community are increasing their membership income
          and lot's more.
        </p>
        <div className="mt-4 grid grid-cols-3 gap-6">
          {communityData.map((item, index) => (
            <CardCustom key={index} image={item.image} title={item.title} />
          ))}
        </div>
      </div>
    </>
  );
}

export default CaringIsMarketing;
