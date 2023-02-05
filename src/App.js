import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Main from "./components/Main";
import Credit from "./components/Credit";

// import Lecture1 from "./components/Lecture1";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/main" element={<Main />}></Route>
      <Route path="/credit" element={<Credit />}></Route>
    </Routes>

    // <Lecture1 />
  );
}

export default App;
