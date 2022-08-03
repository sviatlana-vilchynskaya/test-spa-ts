import React from "react";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Table from "../components/Table";

function MainPage() {
  return (
    <div className="mx-auto">
      <Header />
      <Slider />
      <Table />
    </div>
  );
}

export default MainPage;
