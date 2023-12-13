import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "./axios";
import { userValidation } from "./userValidation";
import { useForm } from "react-hook-form";

function Login() {
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const { email, password } = data;
    await axios
      .post("/login", { email, password })
      .then((result) => userValidation(result))
      .catch((error) => {
        setError(error?.response?.data?.Error);
      });
  };
  return (
    <div className="row d-flex  p-3 h-fitcontent">
      <div className="header-text mb-5">
        <h>Welcome to lambiga</h>
        <p>Unlock Your Team Performance</p>
      </div>
      <p style={{ color: "red", fontSize: "14px" }}>{error}</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="">
          <label class="form-label">Email</label>
          <input
            type="email"
            class="form-control"
            placeholder="Enter email"
            {...register("email", {
              required: "Email is required",
            })}
          />
          <p style={{ color: "red", fontSize: "13px" }}>
            {errors?.email && errors.Email.message}
          </p>
        </div>
        <div className="">
          <label class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            placeholder="Enter password"
            {...register("password", {
              required: "Password is required",
            })}
          />
          <p style={{ color: "red", fontSize: "13px" }}>
            {errors?.Password && errors.Password.message}
          </p>
        </div>
        <div className="d-flex justify-content-end mb-4">
          <Link to="/Forgotpassword">
            <p
              className="fw-bold"
              style={{ fontSize: "18px", color: "#7CA9A6", cursor: "pointer" }}
            >
              Forgot password?
            </p>
          </Link>
        </div>
        <div className="mb-2">
          <button type="submit" className="w-100 p-3">
            Login
          </button>
        </div>
      </form>
      <div className="d-flex justify-content-center">
        <p className="">Don't have an account?</p>
        <span className="signup_link">
          <Link to="/signup" className="text-decoration-none fw-bold">
            SignUp
          </Link>
        </span>
      </div>
    </div>
  );
}
export default Login;
