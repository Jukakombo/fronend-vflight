import React, { useState } from "react";
import flightx from "../data.json";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { FaPlane } from "react-icons/fa";

function SearchAirline() {
  const [final, setFinal] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setFinal(e.target.value);
  };
  const onChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div>
      <>
        <Navbar />
        <div className="bg-gray-200 py-8 ">
          <div className="">
            <div className=" ">
              <div className=" md:flex items-center justify-between">
                <div className=" grid sm:grid-cols-1 border-1">
                  <form className="p-2" onSubmit={onSubmit}>
                    <input
                      name=""
                      onChange={onChange}
                      type="text"
                      className="md:w-[400px] outline-none p-2 rounded mr-2 text-gray-500"
                      placeholder="Search Destination or Origin"
                    />
                    <button
                      type="submit"
                      className="bg-green-400 rounded-[20px] p-2 text-white font-bold"
                    >
                      Search Flight
                    </button>
                  </form>
                </div>
                <div className="  md:pr-[200px]">
                  <h1>Origin to Destination</h1>
                  <p>10 flight found</p>
                </div>
              </div>

              {flightx
                .filter(
                  (x) =>
                    x.destination.toLowerCase().includes(searchTerm) ||
                    x.origin.toLowerCase().includes(searchTerm)
                )
                .map((x) => (
                  <div
                    key={x.id}
                    className="py-8 px-8 md:flex justify-between border-2 border-white"
                  >
                    <div className="">
                      <FaPlane size={50} />
                    </div>
                    <div className="">
                      <h1>{x.name}</h1>
                      <p>{x.flightNo}</p>
                    </div>
                    <div className="">
                      <h1>{x.departureTime}</h1>
                      <p>{x.origin}</p>
                    </div>
                    <div className="">
                      <h1>{x.arrivalTime}</h1>
                      <p>{x.destination}</p>
                    </div>
                    <div className="">
                      <h1>Date</h1>
                      <p>
                        {" "}
                        <span className="text-center">{x.date}</span>
                      </p>
                    </div>

                    <div className="">
                      <h1>Arival Time</h1>
                      <p>{x.arrivalTime}</p>
                    </div>
                    <div className="">
                      <h1>Amount </h1>${x.price}
                    </div>
                    <div className="">
                      <Link to={`/reservation/${x.id}`}>
                        <button className="bg-green-400 rounded-[20px] p-2 font-bold text-white">
                          Book Now
                        </button>
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <Footer />
      </>
    </div>
  );
}

export default SearchAirline;
