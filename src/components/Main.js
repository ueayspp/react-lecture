import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Toothless from "../assets/toothless.png";
import Lightfury from "../assets/lightfury.png";
import Logo from "../assets/logo.png";

function Main() {
  let drg = [
    "Toothless (Night Fury)",
    "Light Fury",
    "Dart",
    "Pouncer",
    "Ruffrunner",
    "Cloudjumper",
    "Stormfly",
    "Hookfang",
    "Valka's Bewilderbeast",
    "Drago's Bewilderbeast",
  ];

  return (
    <div className="flex flex-col h-screen w-screen bg-slate-300">
      <div className="h-1/6">
        <Header />
      </div>

      <div className="h-4/6">
        <div className="flex h-full w-full items-center px-24">
          <div className="w-1/3 relative">
            <img
              src={Toothless}
              alt="Toothless"
              className="w-160 fixed top-80 -left-32 -rotate-12"
            />
          </div>

          <div className="w-1/3 flex flex-col">
            <img src={Logo} alt="logo" className="w-full" />
            <br />

            <ul className="text-center">
              {drg.map((a) => (
                <li>{a}</li>
              ))}
            </ul>
          </div>

          <div className="w-1/3 relative">
            <img
              src={Lightfury}
              alt="Lightfury"
              className="w-160 fixed top-40 -right-20 -rotate-45"
            />
          </div>
        </div>
      </div>

      <div className="h-1/6">
        <Footer />
      </div>
    </div>
  );
}

export default Main;
