import React from "react";

import { city_destination } from "./data";
function Card() {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
      {city_destination.map((item) => (
        <div
          key={item.id}
          className="rounded-xl overflow-hidden bg-gray-100 m-2"
        >
          <img className="" src={item.image} alt={item.city} />
          <div className="flex justify-between">
            <div className="p-4">
              <h1 className="text-3xl">City:{item.city}</h1>
              <p>Country:{item.country}</p>
            </div>
            <h1 className="p-4">From:${item.price}</h1>
          </div>
          <div className="flex justify-between p-4">
            <button className="rounded-[25px] border-2 solid-white bg-none py-2 px-4">
              Date:{item.date}
            </button>
            <button className="rounded-[25px]  border-2 solid-white bg-none py-2 px-4">
              Return
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
