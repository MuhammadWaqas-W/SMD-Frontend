import React from "react";
import HeroSectionReusable from "../features/hero-section-reusable/hero-section-reuseable";
import OurPassionateCheffs from "../components/our-passionate-chef/our-passionate-chef";
import { Box, Container } from "@mui/material";
import Careermain from "../features/career-page/firstSection/FirstSection";

const Careers = () => {
  return (
    <>
      <HeroSectionReusable
        para={"Creating an inclusive & diverse environment for your success"}
        heading={"Careers"}
        gifTitle={"Welcome"}
      />
      <Careermain />
      <OurPassionateCheffs />
    </>
  );
};

export default Careers;
