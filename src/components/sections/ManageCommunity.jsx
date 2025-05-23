import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";

function ManageCommunity() {
  const suitableForData = [
    {
      image: "/member.svg",
      title: "Membership Organization",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      image: "/office.svg",
      title: "National Associations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      image: "/group.svg",
      title: "Clubs And Groups",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
    },
  ];
  return (
    <>
      <div className="mx-auto w-full h-full py-24 max-w-4xl">
        <h1 className="text-4xl text-d-grey font-semibold text-center">
          Manage your entire community in a single system
        </h1>
        <p className="mt-2 text-sm text-center text-d-grey">
          Who is Nextcent suitable for?
        </p>
        <div className="flex flex-wrap flex-col md:flex-row justify-between items-center mt-8">
          {suitableForData.map((item, index) => (
            <Card key={index} className={"w-64 mb-4 md:mb-0"}>
              <CardHeader>
                <img
                  src={item.image}
                  alt="Logo"
                  className="w-16 h-16 mx-auto"
                />
                <h1 className="text-md text-d-grey text-center">
                  {item.title}
                </h1>
              </CardHeader>
              <CardContent>
                <p className="text-grey text-center text-xs">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

export default ManageCommunity;
