import React from "react";
import { Link } from "react-router-dom";
import google from "../assets/images/google.png";

const Login = () => {
  return (
    <div>
      <div className="row row-cols-lg-2 login-parent ">
        <div className="d-flex justify-content-center">
          <div>
            <h3 className="mb-4">Log In</h3>
            <form style={{ width: "400px" }}>
              <div className="form-group mb-3">
                <label for="exampleInputEmail1">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
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
                />
              </div>
              <input
                type="button"
                value="Log in"
                className="mb-3 login-btn pt-2 pb-2 w-100"
              />
            </form>
            <button className="mb-3 login_with_google pt-2 pb-2 w-100">
              <img src={google} alt="" />
              <span className="ms-3 mt-2">Login with Google</span>
            </button>
            <br />
            <span>
              Dont have account?
              <Link to="/register" className="ms-1">sign up</Link>
            </span>
          </div>
        </div>
        <div className="welcome_back d-flex align-items-center">
          <div className="mx-auto">
            <h3 className="text-center">Welcome</h3>
            <h3 className="text-center">Back!</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
