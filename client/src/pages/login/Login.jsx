import { useRef, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { loginCall } from "../../apiCalls";

import {CircularProgress} from "@material-ui/core";
import "./login.css";

const Login = () => {
  const emailRef = useRef();
  const pswRef = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginCall(
      { email: emailRef.current.value, password: pswRef.current.value },
      dispatch
    );
  };

  console.log(user);
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Social M</h3>
          <span className="loginDesc">
            Connect with friends and the world around you
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleSubmit}>
            <input
              type="Email"
              type="email"
              placeholder="Email"
              className="loginInput"
              ref={emailRef}
              required
            />
            <input
              type="Password"
              type="password"
              placeholder="Password"
              className="loginInput"
              ref={pswRef}
              required
              minLength="6"
            />
            <button className="loginButton">
              {isFetching ? <CircularProgress color="white" size="23px"/> : "Log in" }
            </button>
            <span className="loginForgotPsw">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a new Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
