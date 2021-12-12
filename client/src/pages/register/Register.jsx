import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";

const Register = () => {
  const usernameRef = useRef();
  const emailRef = useRef();
  const pswRef = useRef();
  const pswConfirmRef = useRef();
  const navTo = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (pswConfirmRef.current.value !== pswRef.current.value) {
      pswRef.current.setCustomValidity("Passwords do not match!");
    } else {
      const user = {
        username: usernameRef.current.value,
        email: emailRef.current.value,
        password: pswRef.current.value,
      };
      try {
        await axios.post("auth/register", user);
        navTo("/login")
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">Social M</h3>
          <span className="registerDesc">
            Connect with friends and the world around you
          </span>
        </div>
        <div className="registerRight">
          <form className="registerBox" onSubmit={handleSubmit}>
            <input
              type="Username"
              ref={usernameRef}
              required
              placeholder="Username"
              className="registerInput"
            />
            <input
              type="email"
              ref={emailRef}
              required
              placeholder="Email"
              className="registerInput"
            />
            <input
              type="password"
              minLength="6"
              ref={pswRef}
              required
              placeholder="Password"
              className="registerInput"
            />
            <input
              type="password"
              minLength="6"
              ref={pswConfirmRef}
              required
              placeholder="Confirm Password"
              className="registerInput"
            />
            <button className="registerButton" type="submit">
              Sign up
            </button>
            <span className="registerAlreadyHaveAcc">
              Already have an Account?
            </span>
            {/* <button className="registerRegisterButton">Create a new Account</button> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
