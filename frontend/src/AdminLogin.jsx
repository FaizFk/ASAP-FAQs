import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import axios from "axios";

const BACKEND_URL = "http://localhost:5000";

const AdminLogin = () => {
  const {login} = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${BACKEND_URL}/api/admin/login`, { email, password });
      login(response.data.token);
      navigate("/");
    } catch (error) {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Login</h1>

      <input
        type="email"
        placeholder="Email"
        className="w-full max-w-md p-2 border border-gray-300 rounded-md mb-4"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full max-w-md p-2 border border-gray-300 rounded-md mb-4"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
};

export default AdminLogin;
