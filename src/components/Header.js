import React from "react";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";

function Header() {
  let navigate = useNavigate();
  return (
    <div className="flex w-full">
      {/* <Sidebar /> */}

      <div className="w-5/6 pl-10 pt-5 space-x-8">
        <button className="text-xl font-bold" onClick={() => navigate("/main")}>
          Drago
        </button>
        <button
          className="text-sm font-medium"
          onClick={() => navigate("/credit")}
        >
          Credit
        </button>
      </div>

      <div className="w-1/6 pr-10 pt-5 flex justify-end">
        <button
          className="text-sm font-medium hover:text-red-700 z-10"
          onClick={() => navigate("/login")}
        >
          Sign out
        </button>
      </div>
    </div>
  );
}

export default Header;
