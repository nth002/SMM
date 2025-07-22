import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import loginImg from "../assets/images/aboutUs.jpg";
import Loader from "../components/Loader";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true); // loader on initial load
  const [formSubmitting, setFormSubmitting] = useState(false);
  const navigate = useNavigate();

  // simulate page load delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("⚠️ Please enter both email and password.");
      return;
    }

    setError("");
    setFormSubmitting(true);

    setTimeout(() => {
      setFormSubmitting(false);
      navigate("/dashboard");
    }, 2000); // simulate API delay
  };

  if (loading || formSubmitting) return <Loader />;

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <div className="login-left">
          <h3 className="login-title">Login</h3>
          {error && <div className="error-msg">{error}</div>}
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
            <label htmlFor="password" className="mt-2">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
            <button type="submit" className="btn-login">Login</button>
          </form>
          <div className="signup-footer">
            <p>
              Do not have an account?{" "}
              <a href="/signup" className="login-link">SignUp</a>
            </p>
          </div>
        </div>

        <div className="login-right">
          <div className="tilted-overlay"></div>
          <img src={loginImg} alt="Login Visual" className="login-image" />
        </div>
      </div>
    </div>
  );
};

export default Login;
