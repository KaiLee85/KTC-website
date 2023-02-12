import React from "react";
import { useState } from "react";
import backgroundImg from "../../asset/mainbackgr.jpg";
import "./login.css";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="backgrImg">
        <img src={backgroundImg} alt="backImage" className="loginBackImage" />
        <div className="loginForm">
          <section className="formContainer">
            <h1>LOGIN</h1>
          </section>
          <section>
            <form onSubmit={onSubmit}>
              <div className="inputGroup">
                <input
                  type="text"
                  className=""
                  id="email"
                  name="email"
                  value={email}
                  onChange={onChange}
                  placeholder="Enter your Email"
                  required
                />
                <input
                  type="text"
                  className=""
                  id="password"
                  name="password"
                  value={password}
                  onChange={onChange}
                  placeholder="Enter your Password"
                  required
                />
              </div>
              <button className="submitBtn">Submit</button>
            </form>
          </section>
        </div>
      </div>
    </>
  );
}

export default Login;
