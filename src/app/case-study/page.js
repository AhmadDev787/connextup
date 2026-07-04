import React from "react";
import Hero from "./components/Hero";
import Grid from "./components/Grid";
import HeaderWhite from "../components/headerWhite";

export const metadata = {
  title: "Campaign Results",
  description: "Campagne che generano risultati misurabili.",
  openGraph: {
    title: "Campaign Results",
    description: "Campagne che generano risultati misurabili.",
  },
};
const page = () => {
  return (
    <>
      <HeaderWhite />
      <Hero />
      <Grid />
    </>
  );
};

export default page;
