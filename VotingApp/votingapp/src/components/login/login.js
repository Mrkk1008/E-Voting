import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = ({ setLoginUser }) => {
  const history = useHistory();

  const [user, setUser] = useState({
    email: "",
    password: "",
    aadhaarNo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
     axios.post("http://localhost:9002/login", user).then((res) => {
      alert(res.data.message);
      setLoginUser(res.data.user);
      console.log(res.data.user);
      history.push("/home");
    });
  };
  return (
    <>
    <center>
      <div className="login">
        <h1>Login</h1>
        <input
          type="text"
          name="aadhaarNo"
          value={user.aadhaarNo}
            placeholder="Enter your aadhaarNo"
          onChange={handleChange}
        ></input>
        <input
          type="password"
          name="password"
          value={user.password}
          placeholder="Enter your Password"
          onChange={handleChange}
        ></input>
        <div className="button" onClick={login}>
          Login
        </div>
        <div>or</div>
        <div className="button" onClick={() => history.push("/register")}>
          Register
        </div>
      </div>
      </center>
    </>
  );
};

export default Login;
