import React from "react";
import imagex from "../assets/famous-tower-bridge-evening-london-england.jpg";
function WhyChoosingUs() {
  const textDestination = [
    {
      id: "uid43d4",
      indentifcation: "01",
      title: "Confort Seat",
      text: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium veniam, natus dolor et quidem voluptate quis provident corrupti",
    },
    {
      id: "uidd434",
      indentifcation: "02",
      title: "Safe Journey",
      text: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium veniam, natus dolor et quidem voluptate quis provident corrupti",
    },
    {
      id: "uid4f34",
      indentifcation: "03",
      title: "Money back garantee",
      text: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium veniam, natus dolor et quidem voluptate quis provident corrupti",
    },
  ];
  return (
    <div className="mt-[150px]">
      <h1 className="text-2xl font-bold text-center my-8">
        All Services at V-fly
      </h1>
      <p className="text-center md:w-[60%] m-auto text-xl">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        veniam, natus dolor et quidem voluptate quis provident harum corrupti
        unde ullam explicabo autem! Sed, doloribus.
      </p>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 w-11/12 m-auto my-8 items-center">
        <div className="mr-4">
          <img className="rounded" src={imagex} alt="ximage" />
        </div>
        <div className="">
          <h1 className="text-2xl font-bold">Why you should choose us</h1>
          {textDestination.map((x) => (
            <div className="" key={x.id}>
              <span className="font-bold">____{x.indentifcation}</span>
              <h2 className="text-xl font-semibold">{x.title}</h2>
              <p className="text-gray-400">{x.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyChoosingUs;
