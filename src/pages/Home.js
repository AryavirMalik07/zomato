import React, { useState } from "react";
import "../styles/home.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Tabs from "../components/Tabs";
import Delivery from "../components/Delivery";
import DinOut from "../components/DinOut";
import NightLife from "../components/NightLife";
function Home() {
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <div>
      <Header />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {getCorrectScreen(activeTab)}
      <Footer />
    </div>
  );
}

const getCorrectScreen = (tab) => {
  switch (tab) {
    case "Delivery":
      return <Delivery />;
    case "Dining Out":
      return <DinOut />;
    case "Nightlife":
      return <NightLife />;
    default:
      return <Delivery />;
  }
};

export default Home;
