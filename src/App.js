import React from "react";
import Navbar from "./components/navbar";
import Main from "./components/main";
import Advantages from "./components/advantages";
import Features from "./components/features";
import Plans from "./components/plans";
import Map from "./components/map";
import Recomends from "./components/recomends";
import Subscribe from "./components/subscribe";
import Footer from "./components/footer";

//style
import "./app.css";

const App = () => {
  return (
    <div className="app">
      <div className="container">
        <Navbar />
        <Main />
        <Advantages />
        <Features />
        <Plans />
        <Map />
        <Recomends />
        <Subscribe />
      </div>
      <Footer />
    </div>
  );
};

export default App;
