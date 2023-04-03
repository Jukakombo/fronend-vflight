import React from "react";

import { AiFillCar } from "react-icons/ai";
import { FaHotel, FaShopify } from "react-icons/fa";
import { TbBus } from "react-icons/tb";
import { BiDrink } from "react-icons/bi";
import { HiUserGroup } from "react-icons/hi";
function PlanTrip() {
  return (
    <div className="w-11/12 m-auto" id="Trip">
      <h1 className="centralize_it font-bold text-2xl text-gray-600 py-8">
        Plan your trip with us
      </h1>

      <div className=" flex grid sm:grid-cols-1 md:grid-cols-6">
        <div className="centralize_it m-4">
          <AiFillCar size={60} className="text-gray-600" />
          <span className="text-2xl text-gray-600">Car</span>
        </div>
        <div className="centralize_it m-4">
          <FaHotel size={60} className="text-gray-600" />
          <span className="text-2xl text-gray-600">Hotels</span>
        </div>
        <div className="centralize_it m-4">
          <TbBus size={60} className="text-gray-600" />
          <span className="text-2xl text-gray-600">Airport Trans</span>
        </div>
        <div className="centralize_it m-4">
          <BiDrink size={60} className="text-gray-600" />
          <span className="text-2xl text-gray-600">Tours & Activities</span>
        </div>
        <div className="centralize_it m-4 ">
          <HiUserGroup size={60} className="text-gray-600" />
          <span className="text-2xl text-gray-600">Meet and greet</span>
        </div>
        <div className="centralize_it m-4">
          <FaShopify size={60} className="text-gray-600" />
          <span className="text-2xl text-gray-600">Duty-Free shopping</span>
        </div>
      </div>
    </div>
  );
}

export default PlanTrip;
