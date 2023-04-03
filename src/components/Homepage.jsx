import React from "react";
import Navbar from "./Navbar";
import { sliders } from "./data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
function Homepage() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    easing: "linear",
    fade: false,
    autoplaySpeed: 3000,
  };
  return (
    <div className="homepage" id="Home">
      <Navbar />
      <div className="w-full h-[50%] m-auto">
        <Slider {...settings}>
          {sliders.map((slide) => (
            <div key={slide.id} className="slider">
              <img className="slider_image" src={slide.image} alt="slides" />
              <p className="text_slider text-2xl font-semibold text-center m-auto text-white p-8">
                {slide.text}
              </p>
            </div>
          ))}
        </Slider>
        {/* form search plane */}
        <div className="rounded-[10px] bg-gray-200 md:w-[80%] m-auto overflow-hidden search_plane md:absolute md:top-[700px] md:left-[115px] sm:top-[10px]">
          <div className="header   grid sm:grid-cols-1 md:grid-cols-4 xl:grid-cols-4 bg-green-400 ">
            <div className="bg-green-600 p-2">Search Flight</div>
            <div className="p-2">Check In</div>
            <div className="p-2">Manage Booking</div>
            <div className="p-2">Flight Status</div>
          </div>
          <div className="flght_form p-4 ">
            <h1 className="text-xl font-bold py-2">
              Hey, Where would you like to go?
            </h1>
            <form onClick={() => {}}>
              <div className=" grid sm:grid-cols-1 md:grid-cols-4">
                <div className="flex items-center my-4">
                  <label htmlFor="from" className="p-2">
                    From
                  </label>
                  <select
                    name=""
                    id="from"
                    className="outline-none rounded p-2  w-full"
                  >
                    <option value=" ">Select Destination</option>
                    <option value=" ">Juba</option>
                    <option value=" ">Rumbek</option>
                    <option value=" ">Uganda</option>
                    <option value=" ">Morocco</option>
                    <option value=" ">Dubai</option>
                  </select>
                </div>
                <div className="flex items-center my-4">
                  <label htmlFor="to" className="p-2">
                    To
                  </label>
                  <select
                    name=""
                    id="to"
                    className="outline-none rounded p-2 w-full"
                  >
                    <option value=" ">Arrival Destination</option>
                    <option value=" ">Morocco</option>
                    <option value=" ">Dubai</option>
                    <option value=" ">Juba</option>
                    <option value=" ">Rumbek</option>
                    <option value=" ">Uganda</option>
                  </select>
                </div>
                <div className="flex items-center my-4">
                  <label htmlFor="departing" className="p-2">
                    Departing
                  </label>
                  <input
                    type="date"
                    id="departing"
                    className="rounded p-2 w-full"
                  />
                </div>
                <div className="flex items-center my-4">
                  <label htmlFor="returning" className="p-2">
                    Returning
                  </label>
                  <input
                    type="date"
                    id="returning"
                    className="rounded p-2 w-full"
                  />
                </div>
              </div>
              {/* second input */}
              <div className="grid sm:grid-cols-1 md:grid-cols-3 my-4 items-center">
                <div className="flex items-center py-4">
                  <label htmlFor="class " className="p-2">
                    Class
                  </label>
                  <select
                    name=""
                    id="class"
                    className="outline-none rounded p-2 w-full"
                  >
                    <option value="">Economy</option>
                    <option value="">First Class</option>
                    <option value="">Business Class</option>
                  </select>
                </div>
                <div className="flex items-center my-4">
                  <label htmlFor="class " className="p-2">
                    Passengers
                  </label>
                  <select
                    name=""
                    id="class"
                    className="outline-none rounded p-2 w-full  "
                  >
                    <option value="">Adult </option>
                    <option value="">Infant</option>
                    <option value="">Chidren</option>
                  </select>
                  <select
                    name=""
                    id=""
                    className="outline-none rounded p-2 w-full mx-2"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
                <div className="w-full p-4">
                  <Link to="/vflight">
                    <button className="bg-green-400 cursor-pointer border-none rounded-[20px] p-2   text-xl font-bold text-white w-full">
                      Search Flight
                    </button>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
