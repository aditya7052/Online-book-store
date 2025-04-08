import React from "react";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Show success alert
    alert("Login successful!");

    // Redirect to home page
    navigate("/");
  };

  return (
    <div className="register-login">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input type="email" name="email" id="email" placeholder="Email" />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <button type="submit">Login</button>
        <div className="have-account">
          <p>You don't have an account ?</p>
          <Link to="/register">Register</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
