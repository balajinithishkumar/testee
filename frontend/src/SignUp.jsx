import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "./axios";
import { userValidation } from "./userValidation";
import { useForm } from "react-hook-form";
function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState("");
  const onSubmit = async (data) => {
    const { name, email, password } = data;
    try {
      await axios
        .post("/register", {
          name,
          email,
          password,
        })
        .then((result) => {
          setError(userValidation(result));
        })
        .catch((err) => {
          setError(err.message);
        });
    } catch (e) {
      alert(e.message);
    }
  };
  return (
    <div className="signup row d-flex p-3  h-100 ">
      <div className="header-text mb-4  ">
        <h>Create Your Account</h>
        <p>Welcome back! Please enter your details</p>
      </div>
      <p>{error}</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="">
          <label class="form-label">Name</label>
          <input
            type="name"
            class="form-control"
            placeholder="Enter name"
            {...register("name", {
              required: "Name is required",
              minLength: 4,
              maxLength: 10,
            })}
          />
          <p style={{ color: "red", fontSize: "13px" }}>
            {(errors?.name && errors.name.message) ||
              (errors?.name?.type == "minLength" && " Minimum Length 4") ||
              (errors?.name?.type == "maxLength" && " Maximum Length 10")}
          </p>
        </div>
        <div className="">
          <label class="form-label">Email</label>
          <input
            type="email"
            class="form-control"
            placeholder="Enter email"
            {...register("email", {
              required: "Email is required",
              pattern:
                /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/,
              maxLength: 30,
            })}
          />
          <p style={{ color: "red", fontSize: "13px" }}>
            {(errors?.email && errors.email.message) ||
              (errors?.email?.type == "pattern" && " Invalid email address") ||
              (errors?.email?.type == "maxLength" && "Maximun Length 30")}
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
              minLength: 6,
              maxLength: 10,
            })}
          />
          <p style={{ color: "red", fontSize: "13px" }}>
            {(errors?.password && errors.password.message) ||
              (errors?.password?.type == "minLength" && " Minimum Length 6") ||
              (errors?.password?.type == "maxLength" && " Maximum Length 10")}
          </p>
        </div>
        {/* <div className="">
          <label class="form-label">Retype password</label>
          <input
            type="password"
            class="form-control"
            placeholder="Retype password"
          />
        </div> */}
        <div className="">
          <button type="submit" className="w-100 p-3 mb-3">
            SignUp
          </button>
        </div>
      </form>
      <div className="d-flex justify-content-center">
        <p className="">Already have a account?</p>
        <span className="signup_link">
          <Link to="/login" className="text-decoration-none fw-bold">
            SignIn
          </Link>
        </span>
      </div>
    </div>
  );
}
export default SignUp;
