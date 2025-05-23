import React from "react";

function OurClient() {
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
      <div className="mx-auto w-full h-full py-24">
        <h1 className="text-4xl text-d-grey font-semibold text-center">
          Our Clients
        </h1>
        <p className="mt-2 text-sm text-center text-d-grey">
          We have been working with some Fortune 500+ clients
        </p>
        <div className="mt-8 flex justify-around w-full flex-wrap">
          {clientsLogo.map((logo, index) => (
            <img key={index} src={logo} className="object-cover max-w-20" />
          ))}
        </div>
      </div>
    </>
  );
}

export default OurClient;
