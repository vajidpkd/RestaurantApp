import React from "react";
import Welcome from "../Welcome/Welcome";
import Partner from "../Partner/Partner";
import Booking from "../Booking/Booking";
import Dishes from "../Dishes/Dishes";
import Ambiance from "../Ambiance/Ambiance";
import Delivery from "../Delivery/Delivery";

const Home = () => {
  return (
    <>
      <Welcome />
      <Partner />
      <Booking />
      <Dishes />
      <Ambiance />
      <Delivery />
    </>
  );
};

export default Home;
