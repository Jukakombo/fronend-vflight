import React from "react";

import { GiCommercialAirplane } from "react-icons/gi";

import { exportComponentAsPNG } from "react-component-export-image";
import { Link } from "react-router-dom";
function BookingDetail() {
  return (
    <div>
      <App />
    </div>
  );
}

export default BookingDetail;

function App() {
  const passenger = localStorage.getItem("passenger");
  const passengerStorage = JSON.parse(passenger);

  return (
    <div className="App">
      <MyComponent passengerStorage={passengerStorage} />
    </div>
  );
}

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.componentRef = React.createRef();
  }

  render() {
    return (
      <React.Fragment>
        <div
          ref={this.componentRef}
          className="border-2 border-green-500  border-dotted p-4"
        >
          <div className=" bg-gray-200 my-4 border-2 border-green-400 rounded-[10px] overflow-hidden    grid md:grid-cols-1 w-7/12 m-auto ">
            <div className="rounded-[10px] overflow-hidden">
              <div className="bg-green-400 flex items-center justify-between px-4">
                <div className=" flex items-center p-4">
                  <GiCommercialAirplane size={40} color="white" />
                  <h1 className="font-bold text-white">V-Flight Agency</h1>
                </div>
                <div className="boarding-pass font-bold text-white">
                  Boarding Pass
                </div>
              </div>
              <div className="md:flex justify-between">
                <div className="details pl-4 gap-2">
                  <h1>
                    Passenger{" "}
                    <strong>
                      {this.props.passengerStorage.firstName}{" "}
                      {this.props.passengerStorage.lastName}
                    </strong>
                  </h1>
                  <p>Class:{this.props.passengerStorage?.vclass} </p>
                  <p>From:{this.props.passengerStorage?.from}</p>
                  <p>To:{this.props.passengerStorage?.to}</p>
                  <p>Date:{this.props.passengerStorage?.date}</p>
                  <p>Ticket No:</p>
                </div>
                <div className="left-ticket p-4">
                  <h1>
                    Departure Time:{this.props.passengerStorage?.departureTime}
                  </h1>
                  <h1>
                    Arrival Time:{this.props.passengerStorage?.arrivalTime}
                  </h1>
                  <h1>Seat No: 0001</h1>
                  <h1>Flight: {this.props.passengerStorage?.company}</h1>
                </div>
              </div>
            </div>

            <div className=" bg-green-400 text-center  text-white">
              book with us @ www.vflight.com
            </div>
          </div>
          <div className="my-4 text-center">
            <button
              onClick={() => exportComponentAsPNG(this.componentRef)}
              className="bg-green-400 font-bold text-white p-2 rounded-[20px]"
            >
              Download your Ticket
            </button>
            <h1 className="text-red-700">
              Please don't forget to download your ticket before press the
              button close!
            </h1>
            <Link to="/">
              <button className="bg-green-400 font-bold text-white py-2 px-4 rounded-[20px] ml-2">
                Close
              </button>
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
