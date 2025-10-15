import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import FirstSec from "../FirstSec/FirstSec";
import SecondSec from "../SecondSec/SecondSec";
import ThirdSec from "../ThirdSec/ThirdSec";
import FourthSec from "../FourthSec/FourthSec";
import FifthSec from "../FifthSec/FifthSec";
import SixthSec from "../SixthSec/SixthSec";
import YoutubeVideo from "../YoutubeVideo/YoutubeVideo";

const Shared = () => {
  return (
    <>
      <Header />
       <Outlet />
      <FirstSec />
      <SecondSec />
      <ThirdSec />
      <FourthSec /> 
      <FifthSec />
      <SixthSec /> 
      <YoutubeVideo />
      <Footer />
    </>
  );
};

export default Shared;
