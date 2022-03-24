import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "../Login/login.css";

export default function Login({ setLoginUser }) {
  const [user, setUser] = useState({
    name: "",
    email: "",
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
  const login = () => {
    axios.post("http://localhost:9002/login", user).then((res) => {
      alert(res.data.message);
      setLoginUser(res.data.user);
      history.push("/");
    });
  };

  const history = useHistory();

  return (
    <>
      <div className="container1">
        <div className="loginpage">
          <div className="form">
            {console.log("User", user)}
            <h1>Login</h1>
            <div className="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email id
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your Email"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
            </div>
            <br />
            <div className="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                name="password"
                value={user.password}
                onChange={handleChange}
              />
            </div>
            <br />
            <div className="btns">
              <button type="submit" className="btn-primary" onClick={login}>
                Login
              </button>
              <div>or</div>
              <button
                type="submit"
                className="btn-primary"
                onClick={() => history.push("/register")}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
