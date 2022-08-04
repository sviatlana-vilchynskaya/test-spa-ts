import React from "react";
import Header from "../components/Header/Header";
import Slider from "../components/Slider/Slider";
import Table from "../components/Table/Table";
import Footer from "../components/Footer/Footer";
import Stat from "../components/Stat/Stat";

function MainPage() {
  return (
    <div className="main-wrap">
      <Header />
      <Slider />
      <Stat />
      <Table />
      <Footer />
    </div>
  );
}

export default MainPage;
