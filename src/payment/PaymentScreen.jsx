import { CircularProgress, Grid, Snackbar } from "@mui/material";
import { ListItem, Paper, Typography } from "@mui/material";
// import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import Footer4 from "../components/Footer";
import Header3 from "../components/Navbar";

import AddPaypalButton1 from "./AddPaypalButton1";

import { useNavigate } from "react-router-dom";

function OrderSummary() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("profile"));
  const passenger = localStorage.getItem("passenger");
  const passengerStorage = JSON.parse(passenger);
  const {
    firstName,
    lastName,
    amount,
    phone,
    email,
    departureTime,
    from,
    to,
    arrivalTime,
    company,
  } = passengerStorage;

  const payment = JSON.parse(localStorage.getItem("cartItems"));
  const userInfos = JSON.parse(localStorage.getItem("registration"));
  console.log(userInfos);

  useEffect(() => {
    if (!user || !userInfos) {
      navigate("/login");
    }
  }, [userInfos, navigate, user]);

  return (
    <>
      <Header3 />

      <div className="container">
        <Paper>
          <div>
            <div>
              <ListItem>
                {" "}
                <Typography variant="h5">
                  Passenger Details and payment
                </Typography>
              </ListItem>
              <div className="grid sm:grid-cols-2 gap-4">
                <ListItem className=" bg-gray-200 font-bold my-2">
                  Full Name: {firstName} {lastName}
                </ListItem>
                <ListItem className=" bg-gray-200 font-bold my-2">
                  Email Address: {email}
                </ListItem>
                <ListItem className=" bg-gray-200 font-bold my-2">
                  Phone Number:{phone}
                </ListItem>
                <ListItem className=" bg-gray-200 font-bold my-2">
                  Air Line: {company}
                </ListItem>
                <ListItem className=" bg-gray-200 font-bold my-2">
                  Travelling from : {from}
                </ListItem>{" "}
                <ListItem className=" bg-gray-200 font-bold my-2">
                  Destination zone: {to}
                </ListItem>
                <ListItem className=" bg-gray-200 font-bold my-2">
                  Departure Time: {departureTime}hr
                </ListItem>{" "}
                <ListItem className=" bg-gray-200 font-bold my-2">
                  Arrival Time: {arrivalTime}hr
                </ListItem>
              </div>
            </div>

            <div className="w-full text-center grid sm:grid-cols-2 gap-4">
              <ListItem>
                <Typography variant="h5">Sammary Info</Typography>
              </ListItem>
              <ListItem>Tax : 0$</ListItem>
              <ListItem> Amount : {amount}$</ListItem>
              <ListItem>
                <p>
                  <strong>Total Amount:</strong>${amount}
                </p>
              </ListItem>
            </div>
          </div>
        </Paper>
        <ListItem className="w-full m-auto">
          <AddPaypalButton1 amount={amount} />
        </ListItem>
      </div>
      <Footer4 />
    </>
  );
}

export default OrderSummary;
