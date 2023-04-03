import React from "react";
import { AiFillStar } from "react-icons/ai";
function Hotel() {
  return (
    <div className="hotel flex  justify-center items-center" id="Hotel">
      <div className="text-center py-8 text-white">
        <h3 className="text-xl">Week in Juba</h3>
        <h1 className="text-2xl font-bold py-4">The Continental Pyrid Hotel</h1>
        <p className="md:w-[60%] sm:w-[80%]sm:m-auto m-auto px-4 text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          aliquam, velit ut quod maiores voluptates omnis perferendis ex impedit
          sunt!
        </p>
        <div className="flex justify-center items-center  py-4">
          <AiFillStar size={30} className="text-yellow-600" />
          <AiFillStar size={30} className="text-yellow-600" />
          <AiFillStar size={30} className="text-yellow-600" />
          <AiFillStar size={30} className="text-yellow-600" />
          <AiFillStar size={30} className="text-yellow-600" />
        </div>
        <button className="rounded-[20px] border-2 solid-white bg-none py-2 px-4">
          Read More
        </button>
      </div>
    </div>
  );
}

export default Hotel;
