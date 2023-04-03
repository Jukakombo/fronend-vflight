import React from "react";
import { useParams } from "react-router-dom";
import flightx from "../data.json";
import Footer from "./Footer";
import { GiCommercialAirplane } from "react-icons/gi";
import Navbar from "./Navbar";
import {
  exportComponentAsJPEG,
  exportComponentAsPDF,
  exportComponentAsPNG,
} from "react-component-export-image";
function BookingDetail() {
  // const { id } = useParams();
  // const bookinginfo = flightx.find((x) => x.id === id);

  return (
    <div>
      <Navbar />

      <App />
      <Footer />
    </div>
  );
}

export default BookingDetail;

function App() {
  return (
    <div className="App">
      <MyComponent />
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
        <div ref={this.componentRef}>
          <div className=" bg-gray-200 my-4 border-2 border-green-400 rounded-[10px] overflow-hidden    grid md:grid-cols-1 w-7/12 m-auto">
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
                  <p>Origin Country/City: Juba</p>
                  <p>Destination:Kampala</p>
                  <p>Departure:9:00am</p>
                  <p>Arival time: 6/00</p>
                </div>
                <div className="left-ticket p-4">
                  <h1>Name:</h1>
                  <h1>Dep:3:00</h1>
                  <h1>Seat No: 0001</h1>
                  <h1>Flight No:Indian-Air</h1>
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
          </div>
        </div>
      </React.Fragment>
    );
  }
}
