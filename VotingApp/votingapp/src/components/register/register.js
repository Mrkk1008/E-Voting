import React, { useState } from "react";
import "./register.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory();

  const [user, setUser] = useState({
    name: "",
    email: "",
    aadhaarNo: "",
    password: "",
    reEnterPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const { name, email, aadhaarNo, password, reEnterPassword } = user;
    if (
      name &&
      email &&
      aadhaarNo &&
      password &&
      password === reEnterPassword
    ) {
      axios.post("http://localhost:9002/register", user).then((res) => {
        alert(res.data.message);
        history.push("/login");
      });
    } else {
      alert("invalid");
    }
  };

  return (
    <center>
      <div className="register">
        <h1>Register</h1>
        <input
          type="text"
          name="name"
          value={user.name}
          placeholder="Your Name"
          onChange={handleChange}
          required
        ></input>
        <input
          type="email"
          name="email"
          value={user.email}
          placeholder="Your Email"
          onChange={handleChange}
          required
        ></input>
        <input
          type="text"
          name="aadhaarNo"
          value={user.aadhaarNo}
          placeholder="Your aadhaarNumber"
          onChange={handleChange}
          required
        ></input>
        <input
          type="password"
          name="password"
          value={user.password}
          placeholder="Enter  your Password"
          onChange={handleChange}
          required
        ></input>
        <input
          type="password"
          name="reEnterPassword"
          value={user.reEnterPassword}
          placeholder="Re-enter your Password"
          onChange={handleChange}
          required
        ></input>
        <div className="button" onClick={register}>
          Register
        </div>
        <div>or</div>
        <div className="button" onClick={() => history.push("/login")}>
          Login
        </div>
      </div>
    </center>
  );
};

export default Register;
