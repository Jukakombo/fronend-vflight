import { useState } from "react";
import Footer from "./components/Footer";
import NeedHelp from "./components/NeedHelp";
import Hotel from "./components/Hotel";
import FeatureDestination from "./components/FeatureDestination";
import PlanTrip from "./components/PlanTrip";
import Homepage from "./components/Homepage";
import { Routes, Route } from "react-router-dom";
import WhyChoosingUs from "./components/WhyChoosingUs";

function Home() {
  return (
    <div className="main">
      <Homepage />
      <WhyChoosingUs />
      <PlanTrip />
      <FeatureDestination />
      <Hotel />
      <NeedHelp />

      <Footer />
    </div>
  );
}

export default Home;
