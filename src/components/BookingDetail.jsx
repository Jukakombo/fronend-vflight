import React from "react";
import { useParams } from "react-router-dom";
import flightx from "../data.json";
import Footer from "./Footer";
import { GiCommercialAirplane } from "react-icons/gi";
import Navbar from "./Navbar";
function BookingDetail() {
  const { id } = useParams();
  const bookinginfo = flightx.find((x) => x.id === id);

  return (
    <div>
      <Navbar />
      <div className=" bg-gray-200 my-4  rounded-[10px] overflow-hidden    grid md:grid-cols-1 w-7/12 m-auto">
        <div className="rounded-[10px] overflow-hidden">
          <div className="bg-green-400 flex items-center justify-between px-4">
            <div className=" flex items-center p-4">
              <GiCommercialAirplane size={40} color="white" />
              <h1 className="font-bold text-white">V-Flight Ticket</h1>
            </div>
            <div className="boarding-pass font-bold text-white">
              Boarding Pass
            </div>
          </div>
          <div className="md:flex justify-between">
            <div className="details pl-4">
              <h1>Flight Detail:</h1>
              <p>Origin Country/City:{bookinginfo.origin}</p>
              <p>Destination:{bookinginfo.destination}</p>
              <p>Departure:{bookinginfo.departureTime}</p>
              <p>Arival time: {bookinginfo.arrivalTime}</p>
            </div>
            <div className="left-ticket p-4">
              <h1>Name:</h1>
              <h1>Dep:{bookinginfo.date}</h1>
              <h1>Seat No: 0001</h1>
              <h1>Flight No:{bookinginfo.flightNo}</h1>
            </div>
          </div>
        </div>

        <div className=" bg-green-400 text-center  text-white">
          book with us @ www.vflight.com
        </div>
      </div>
      <div className="my-4 text-center">
        <button className="bg-green-400 font-bold text-white p-2 rounded-[20px]">
          Download your Ticket
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default BookingDetail;
