import React from "react";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // Show popup
    alert("Registration successful!");

    // Redirect to login page
    navigate("/login");
  };

  return (
    <div className="register-login">
      <h1>Create new account</h1>
      <form onSubmit={handleRegister}>
        <input type="email" name="email" id="email" placeholder="Email" />
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <button type="submit">Register</button>
        <div className="have-account">
          <p>Already have an account ?</p>
          <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
