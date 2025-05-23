import React from "react";
import UsersIcon from "../../assets/icons/UsersIcon";
import ClubsIcon from "../../assets/icons/ClubsIcon";
import TouchIcon from "../../assets/icons/TouchIcon";
import CreditCardIcon from "../../assets/icons/CreditCardIcon";

export default function HelpLocal() {
  return (
    <>
      <div className="bg-silver w-full h-full">
        <div className="mx-auto max-w-4xl py-24 flex justify-between items-center">
          <div className="flex flex-col w-1/2">
            <h1 className="font-semibold leading-7 text-d-grey text-3xl">
              Helping local{" "}
              <span className="text-primary">business reinvent itself</span>
            </h1>
            <p className="text-gray-900 text-sm">
              We reached here with our hard work and dedication
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-row items-center gap-4">
              <UsersIcon className="w-12 h-12" />
              <div className="flex flex-col">
                <h1 className="text-d-grey text-xl">2,245,341</h1>
                <p className="text-gray-900 text-sm">Member</p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-4">
              <ClubsIcon className="w-12 h-12" />
              <div className="flex flex-col">
                <h1 className="text-d-grey text-xl">46,328</h1>
                <p className="text-gray-900 text-sm">Clubs</p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-4">
              <TouchIcon className="w-12 h-12" />
              <div className="flex flex-col">
                <h1 className="text-d-grey text-xl">828,867</h1>
                <p className="text-gray-900 text-sm">Event Bookings</p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-4">
              <CreditCardIcon className="w-12 h-12" />
              <div className="flex flex-col">
                <h1 className="text-d-grey text-xl">1,926,436</h1>
                <p className="text-gray-900 text-sm">Payments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
