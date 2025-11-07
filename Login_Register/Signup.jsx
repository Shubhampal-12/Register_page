// Signup.jsx
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Signup Data:", name , email , password);
    alert("Account created successfully!");
    axios
      .post("http://localhost:3001/", { name, email, password })
      .then((result) => {
        result.data;
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="card p-4 shadow-sm" style={{ width: "22rem" }}>
        <h3 className="text-center mb-3">Create Account</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Sign Up
          </button>
        </form>
        <p className="text-center mt-3">
          Already have an account?{" "}
          <Link to="/login" className="text-decoration-none">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}
