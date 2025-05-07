import React, { useState, useRef, useEffect } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import "../assets/login.css";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const mailRef = useRef(null);

  const handleSignup = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Signup successful!");
      navigate("/login");
    } catch (error) {
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(function () {
    mailRef.current.focus();
  }, []);

  return (
    <div className="login-wrapper">
      <form className="login-form" onSubmit={handleSignup}>
        <h2>PortFolio Builder</h2>

        <label>Email</label>
        <input
          ref={mailRef}
          type="email"
          placeholder="Enter your email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Signing Up..." : "Sign Up"}
        </button>

        <p className="signup-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
