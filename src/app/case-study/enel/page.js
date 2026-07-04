import React from "react";
import Hero from "./components/eg-Hero";
import ContentSection from "./components/eg-contentSection";
import Grid from "./components/eg-Grid";
import Cards from "./components/eg-cards";
import Gallery from "../components/videoGallery";
import Results from "./components/results";
import Insights from "./components/insights";
import HeaderWhite from "@/app/components/headerWhite";
import Relatedstudies from "../components/relatedStudies";
const videos = [
  "/homeVideos/enel1.mp4",
  "/homeVideos/enel2.mp4",
  "/homeVideos/enel3.mp4",
];
const page = () => {
  return (
    <main>
      <HeaderWhite />
      <Hero />
      <Grid />
      <ContentSection />
      <Cards />
      <Gallery videos={videos} />
      <Results />

      <Relatedstudies />
    </main>
  );
};

export default page;
