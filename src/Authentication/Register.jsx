import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import google from "../assets/images/google.png";
import UseAuth from "../Context/UseAuth";

const Register = () => {
  const { emailPassSignIn, googleSignIn } = UseAuth();
  const [email, setEmail] = useState({});
  const [pass, setPass] = useState({});
  let navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    emailPassSignIn(email, pass, navigate);
  };
  return (
    <div>
      <div className="row row-cols-lg-2 login-parent ">
        <div className="welcome_back d-flex align-items-center">
          <div className="mx-auto">
            <h3 className="text-center">Welcome</h3>
            <h3 className="text-center">to</h3>
            <h3 className="text-center">AAKRITI!</h3>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div>
            <h3 className="mb-4">Sign Up</h3>
            <form style={{ width: "400px" }} onSubmit={handleRegister}>
              <div className="form-group mb-3">
                <label for="exampleInputEmail1">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label for="exampleInputEmail1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter password"
                  onChange={(e) => setPass(e.target.value)}
                  required
                />
              </div>
              <input
                type="submit"
                value="Sign Up"
                className="mb-3 login-btn pt-2 pb-2 w-100"
              />
            </form>
            <button
              className="mb-3 login_with_google pt-2 pb-2 w-100"
              onClick={googleSignIn}
            >
              <img src={google} alt="" />
              <span className="ms-3 mt-2">Login with Google</span>
            </button>
            <br />
            <span>
              Already Have an account?
              <Link to="/login" className="ms-1">
                sign In
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
