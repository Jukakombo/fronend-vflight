import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import BookingDetail from "./components/BookingDetail";
import SearchAirline from "./components/SearchAirline";

import Home from "./Home";
import Membership from "./payment/Membership";
import Register from "./payment/Register";
import PaymentScreen from "./payment/PaymentScreen";
import Reservation from "./components/Reservation";
import { getRegistrations } from "./actions/registration";
import { useDispatch } from "react-redux";
import Database from "./components/Database";
import { useState } from "react";
import xloader from "./assets/x.svg";
function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRegistrations());
  }, [dispatch]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="bg-[rgb(241, 242, 243)]  items-center  flex justify-center loaderx">
          <div className="flex items-center">
            <img className="w-[70px]" src={xloader} alt="Loading" />
            <h1 className="font-bold">Loading...</h1>
          </div>
        </div>
      ) : (
        <div className="main">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/vflight" exact element={<SearchAirline />} />
            <Route path="/receipt" exact element={<BookingDetail />} />
            <Route path="/create-account" exact element={<Membership />} />
            <Route path="/login" exact element={<Membership />} />
            <Route path="/seat-selection" exact element={<Register />} />
            <Route path="/payment" exact element={<PaymentScreen />} />
            <Route path="/database" exact element={<Database />} />

            <Route path="/reservation/:id" exact element={<Reservation />} />
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
