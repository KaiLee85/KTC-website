import React from "react";
import backgroundImg from "../../asset/mainbackgr.jpg";
import "./login.css";
function Login() {
  return (
    <>
      <div className="backgrImg">
        <img src={backgroundImg} alt="backImage" className="loginBackImage" />
      </div>
    </>
  );
}

export default Login;
