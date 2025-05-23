import React from "react";
import { Button } from "../ui/button";
import RightIcon from "../../assets/icons/24/RightIcon";

function Testimony() {
  const clientsLogo = [
    "client-1.png",
    "client-2.png",
    "client-3.png",
    "client-4.png",
    "client-5.png",
    "client-6.png",
  ];

  return (
    <>
      <div className="bg-silver w-full h-full">
        <div className="mx-auto max-w-4xl py-24">
          <div className="flex flex-row justify-between items-center">
            <div className="w-3/12 aspect-square">
              <img
                src="/dummy-customer.jpg"
                alt="Event"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="w-8/12">
              <p className="text-grey text-sm">
                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
                lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin
                eu enim metus. Vivamus sed libero ornare, tristique quam in,
                gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi
                laoreet elit at ligula molestie, nec molestie mi blandit.
                Suspendisse cursus tellus sed augue ultrices, quis tristique
                nulla sodales. Suspendisse eget lorem eu turpis vestibulum
                pretium. Suspendisse potenti. Quisque malesuada enim sapien,
                vitae placerat ante feugiat eget. Quisque vulputate odio neque,
                eget efficitur libero condimentum id. Curabitur id nibh id sem
                dignissim finibus ac sit amet magna.
              </p>
              <p className="text-primary text-md font-semibold mt-2">
                Tim Smith
              </p>
              <p className="text-grey text-sm mt-2">Tim Smith</p>
              <div className="flex justify-around items-center">
                {clientsLogo.map((logo, index) => (
                  <img
                    key={index}
                    src={logo}
                    className="object-cover w-9"
                  />
                ))}
                <Button variant="ghost" size={"md"}>
                  Meet All Customer <RightIcon color="#4CAF4F" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimony;
