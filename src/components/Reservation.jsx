import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import flightDetail from "../data.json";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { createRegistration } from "../actions/registration";
import { sanityClient } from "./sanityClient";
import { useEffect } from "react";

function Reservation() {
  const { id } = useParams();
  const reservationDetail = flightDetail.find((x) => x.id === id);
  const [isSubmiting, setIsSubmiting] = useState(false);
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    amount: reservationDetail.price,
    paymentMethode: "",
    phone: "",
    vclass: "",
    adult: "",
    children: "",
    date: reservationDetail.date,
    flightNo: reservationDetail.flightNo,
    company: reservationDetail.name,
    arrivalTime: reservationDetail.arrivalTime,
    from: reservationDetail.origin,
    to: reservationDetail.destination,
    departureTime: reservationDetail.departureTime,
  };
  const [registration, setRegistration] = useState(initialState);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    firstName,
    lastName,
    email,
    amount,
    paymentMethode,
    phone,
    vclass,
    adult,
    children,
    date,
    flightNo,
    company,
    arrivalTime,
    from,
    to,
    departureTime,
  } = registration;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createRegistration(registration));
    const passenger = {
      _type: "vflight",
      firstName: firstName,
      lastName: lastName,
      email: email,
      amount: amount,
      paymentMethode: paymentMethode,
      phone: phone,
      vclass: vclass,
      adult: adult,
      children: children,
      date: date,
      flightNo: flightNo,
      company: company,
      arrivalTime: arrivalTime,
      from: from,
      to: to,
      departureTime: departureTime,
    };
    sanityClient.create(passenger);
    localStorage.setItem("passenger", JSON.stringify(passenger));
    setIsSubmiting(true);
    setTimeout(() => {
      navigate("/payment");
      setIsSubmiting(false);
    }, 3000);

    clearField();
  };
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setRegistration({ ...registration, [name]: value });
  };
  const clearField = () => {
    setRegistration({
      firstName: "",
      lastName: "",
      email: "",
      amount: "",
      paymentMethode: "",
      phone: "",
      vclass: "",
      adult: "",
      children: "",
      date: "",
      flightNo: "",
      company: "",
      arrivalTime: "",
      from: "",
      to: "",
      departureTime: "",
    });
  };
  return (
    <>
      <Navbar />
      <div>
        <div className="plane information   border-2 border-inherit ">
          <h1 className="text-center bg-green-300 my-2 text-white p-4 font-bold uppercase">
            Flight Detail
          </h1>
          <div className="grid  xs:bg-green-200 sm:grid-cols-2 md:grid-cols-4">
            <div className="text-center md:font-bold">
              <h1>From</h1>
              <p>{reservationDetail.origin}</p>
            </div>
            <div className="text-center md:font-bold">
              <h1>To</h1>
              <p>{reservationDetail.destination}</p>
            </div>
            <div className="text-center md:font-bold">
              <h1>Departure</h1>
              <p>{reservationDetail.departureTime}</p>
            </div>
            <div className="text-center md:font-bold">
              <h1>Arival</h1>
              <p>{reservationDetail.arrivalTime}</p>
            </div>
          </div>
          <div className="mt-4 grid xs:bg-green-200 sm:grid-cols-2 md:grid-cols-4">
            <div className="text-center md:font-bold">
              <h1>Flight No:</h1>
              <p>{reservationDetail.flightNo}</p>
            </div>
            <div className="text-center md:font-bold">
              <h1>Date</h1>
              <p>{reservationDetail.date}</p>
            </div>
            <div className="text-center md:font-bold">
              <h1>Company</h1>
              <p>{reservationDetail.name}</p>
            </div>
            <div className="text-center md:font-bold">
              <h1>Amount$</h1>
              <p>{amount}</p>
            </div>
          </div>
        </div>
        <div className="">
          <h1 className="text-center bg-green-300 my-2 text-white p-4 font-bold uppercase mt-4">
            Passenger Details
          </h1>
          <form className="m-8 grid md:grid-cols-3" onSubmit={submitHandler}>
            <div className="input_data">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                value={firstName}
                required
                onChange={onChangeHandler}
                id="firstName"
                placeholder="Enter your first name!"
              />
            </div>
            <div className="input_data">
              <label htmlFor="laststName">Last Name/Family Name</label>
              <input
                value={lastName}
                required
                name="lastName"
                onChange={onChangeHandler}
                type="text"
                id="lastName"
                placeholder="Enter your Last name!"
              />
            </div>

            <div className="input_data">
              <label htmlFor="email">Email Address</label>
              <input
                value={email}
                name="email"
                onChange={onChangeHandler}
                required
                type="email"
                id="email"
                placeholder="Enter your email!"
              />
            </div>
            {/* air detail */}
            <div className="input_data">
              <label htmlFor="from">From</label>
              <input
                value={from}
                name="from"
                type="from"
                required
                id="from"
                placeholder="Enter your from!"
              />
            </div>
            <div className="input_data">
              <label htmlFor="to">To</label>
              <input
                value={to}
                required
                name="to"
                type="to"
                id="to"
                placeholder="Enter your to!"
              />
            </div>
            <div className="input_data">
              <label htmlFor="departureTime">Departure Time</label>
              <input
                value={departureTime}
                required
                name="departureTime"
                type="departureTime"
                id="departureTime"
                placeholder="Enter your departure Time!"
              />
            </div>
            <div className="input_data">
              <label htmlFor="arrivalTime">Arrival Time</label>
              <input
                value={arrivalTime}
                required
                name="arrivalTime"
                type="arrivalTime"
                id="arrivalTime"
                placeholder="Enter your arrival Time!"
              />
            </div>
            <div className="input_data">
              <label htmlFor="date">Date</label>
              <input
                value={date}
                name="date"
                type="text"
                required
                id="date"
                placeholder="Enter your date!"
              />
            </div>
            <div className="input_data">
              <label htmlFor="flightNo">Flight No.</label>
              <input
                value={flightNo}
                required
                name="flightNo"
                type="flightNo"
                id="flightNo"
                placeholder="Enter your flightNo!"
              />
            </div>
            <div className="input_data">
              <label htmlFor="company">company</label>
              <input
                required
                value={company}
                name="company"
                type="company"
                id="company"
                placeholder="Enter your company!"
              />
            </div>

            <div className="input_data">
              <label htmlFor="amount">Amount $</label>
              <input
                value={amount}
                name="amount"
                type="text"
                id="amount"
                placeholder="Amount"
              />
            </div>
            <div className="input_data">
              <label htmlFor="paymentMethode">payment Methode </label>
              <select
                value={paymentMethode}
                onChange={onChangeHandler}
                name="paymentMethode"
                type="text"
                id="paymentMethode"
                required
                placeholder="paymentMethode"
              >
                <option>...Select </option>
                <option value="paypal">Paypal</option>
              </select>
            </div>
            <div className="input_data">
              <label htmlFor="phone">Phone Number </label>
              <input
                value={phone}
                onChange={onChangeHandler}
                name="phone"
                required
                type="text"
                id="phone"
                placeholder="phone"
              />
            </div>
            <div className="input_data">
              <label htmlFor="class">Class </label>
              <select
                value={vclass}
                onChange={onChangeHandler}
                required
                name="vclass"
                type="text"
                id="class"
                placeholder="class"
              >
                <option value="">...select</option>
                <option value="Econommy">Econommy</option>
                <option value="Bussiness Class">Bussiness Class</option>
                <option value="First Class">First Class</option>
              </select>
            </div>
            <div className="input_data">
              <label htmlFor="adult">Adult </label>
              <select
                value={adult}
                onChange={onChangeHandler}
                name="adult"
                type="text"
                id="adult"
                placeholder="adult"
                required
              >
                <option value="">...select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div className="input_data">
              <label htmlFor="children">Children </label>
              <select
                value={children}
                onChange={onChangeHandler}
                name="children"
                required
                type="text"
                id="children"
                placeholder="children"
              >
                <option value="">...select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <button className="primary__button bg-green-400 md:mt-8">
              {isSubmiting ? "Submiting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Reservation;
