import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // new CSS for login styles

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("⚠️ Please enter both email and password.");
      return;
    }

    setError("");
    console.log("Login data:", { email, password });
    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h3 className="login-title">Login to Jagannath GPT</h3>
        {error && (
          <div className="alert alert-warning text-center py-2" role="alert">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            type="email"
            id="email"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />

          <label htmlFor="password" className="form-label mt-3">Password</label>
          <input
            type="password"
            id="password"
            className="form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />

          <button type="submit" className="btn-login">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
