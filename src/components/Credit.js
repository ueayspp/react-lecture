import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Dart from "../assets/dart.png";
import Pouncer from "../assets/pouncer.png";
import Ruffrunner from "../assets/ruffrunner.png";
import Sheep from "../assets/sheep.png";

function Credit() {
  return (
    <div className="flex flex-col h-screen w-screen bg-slate-300">
      <div className="h-1/6">
        <Header />
      </div>

      <div className="h-5/6 p-20 text-center">
        <h1 className="text-2xl font-bold mb-10">Dragonies and Little Sheep</h1>

        <div className="pt-10 flex justify-evenly items-end">
          <div className="flex flex-col">
            <img src={Dart} alt="dart" className="w-48" />
            <h1 className="text-lg font-semibold">Dart</h1>
            <h2>Supapen</h2>
          </div>
          <div className="flex flex-col">
            <img src={Ruffrunner} alt="dart" className="w-56" />
            <h1 className="text-lg font-semibold">Ruffrunner</h1>
            <h2>Supaporn</h2>
          </div>
          <div className="flex flex-col">
            <img src={Pouncer} alt="dart" className="w-72" />
            <h1 className="text-lg font-semibold">Pouncer</h1>
            <h2>Onjira</h2>
          </div>
          <div className="flex flex-col">
            <img src={Sheep} alt="dart" className="w-52" />
            <h1 className="text-lg font-semibold">Sheep</h1>
            <h2>Arusa</h2>
          </div>
        </div>
      </div>

      <div className="h-1/6">
        <Footer />
      </div>
    </div>
  );
}

export default Credit;
