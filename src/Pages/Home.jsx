import React from "react";
import CollectionBox from "../Components/Home/Collection/CollectionBox";
import Services from "../Components/Home/Services/Services";
import Trendy from "../Components/Home/Trendy/Trendy";
import DealTimer from "../Components/Home/Deal/DealTimer";
import HeroSection from "../Components/Home/Hero/HeroSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <CollectionBox />
      <Trendy />
      <DealTimer />
      <Services />
    </>
  );
};

export default Home;
