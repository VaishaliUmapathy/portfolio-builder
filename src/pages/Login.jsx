import React, { useState, useRef, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase"; 
import Dashboard from '../pages/Dashboard';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const mailRef = useRef(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
     
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const userDocRef = doc(db, "users", user.uid);
      const docSnapshot = await getDoc(userDocRef);
      if (!docSnapshot.exists()) {
        await setDoc(userDocRef, {
          isPublished: false, 
          selectedTemplate: "",
          portfolioData: {},
          publishedAt: null,
        });
      }

      alert("Login successful!");
      navigate("/dashboard"); 
    } catch (error) {
      alert(error.message); 
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    mailRef.current.focus();
  }, []);
  return (
    <div className="login-wrapper">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login to PortFolio Builder</h2>
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
          {isLoading ? "Logging in..." : "Login"}
        </button>

        <p className="signup-link">
          Don’t have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
