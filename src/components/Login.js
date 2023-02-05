import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  return (
    <div className="h-screen flex flex-col items-center justify-center space-y-12">
      <h1 className="text-5xl font-bold">Login</h1>

      <div className="flex flex-col">
        <label htmlFor="UserID">User ID:</label>
        <input type="text" placeholder="Enter User ID" />
      </div>

      <div className="flex flex-col">
        <label htmlFor="password">Password: </label>
        <input type="password" placeholder="Enter Password" />
      </div>

      <button
        className="px-6 py-2 text-white font-semibold bg-blue-800 hover:bg-gradient-to-r from-blue-500 to-red-500 rounded-full"
        onClick={() => navigate("/main")}
      >
        Sign in
      </button>
    </div>
  );
}

export default Login;
