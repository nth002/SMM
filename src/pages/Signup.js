import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
import signupImg from "../assets/images/aboutUs.jpg";
import Loader from "../components/Loader";

const Signup = () => {
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
    if (!password) {
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
    <div className="signup-wrapper">
      <div className="signup-card">
        <div className="signup-left">
          <h3 className="signup-title">Sign Up</h3>
          {error && <div className="error-msg">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div  className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Enter your email" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="number">Number</label>
              <input type="number" id="number" placeholder="Enter your Number" />
            </div>
            <div className="form-group">
              <label htmlFor="org">Organization</label>
              <input type="text" id="org" placeholder="Enter your Org.." />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Re-enter password"
              />
            </div>
          </div>
          

          <button type="submit" className="btn-signup">Signup</button>
          </form>
          <div className="signup-footer">
            <p>Already have an account?{" "}
              <a href="/login" className="login-link">Login</a>
            </p>
          </div>

        </div>

        <div className="signup-right">
          <div className="tilted-overlay"></div>
          <img
            src={signupImg}
            alt="signup Visual"
            className="signup-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
