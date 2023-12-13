import { useState } from "react";
import axios from "./axios";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

function Forgotpassword() {
  const [email, setemail] = useState("");
  const [newPassword, setnewPassword] = useState("");
  const [reTypeNewPassword, setreTypeNewPassword] = useState("");
  async function updatePassword() {
    var onlygmail = "@gmail.com";
    var end = email.length + 1;
    var start = end - 1 - onlygmail.length;
    if (email == "" || email.substring(start, end) != onlygmail) {
      return alert("Enter valid email id");
    }
    if (newPassword == "") {
      return alert("enter valid password");
    }
    if (newPassword != reTypeNewPassword) {
      return alert("The password confirmation does not match");
    }
    console.log(newPassword);
    axios
      .post("/forgotpassword", { email, newPassword })
      .then((result) => {
        alert(result.data.result);
      })
      .catch((error) => {
        alert(error.message);
      });
  }
  return (
    <div className="forgot row d-flex p-3  h-100 ">
      <div className="header-text mb-2">
        <h>Forgot your password?</h>
      </div>
      <div className="forgot_info mb-4">
        <p>
          Kindly enter the email address tied to your account, we would help you
          reset password
        </p>
      </div>
      <div>
        <label class="form-label">Enter email</label>
        <input
          type="name"
          class="form-control"
          placeholder="Enter email"
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
      </div>
      <div>
        <label class="form-label">Enter a new password</label>
        <input
          type="email"
          class="form-control"
          placeholder="Enter a new password"
          onChange={(e) => {
            setnewPassword(e.target.value);
          }}
        />
      </div>
      <div className="mb-4">
        <label class="form-label">Re-type new password</label>
        <input
          type="password"
          class="form-control"
          placeholder="Enter password"
          onChange={(e) => {
            setreTypeNewPassword(e.target.value);
          }}
        />
      </div>
      <div>
        <button
          className="w-100 p-3 mb-3"
          onClick={() => {
            updatePassword();
          }}
        >
          Recover password
        </button>
      </div>
      <div className="">
        <Link
          className="d-flex back-to-login mt-3 text-decoration-none"
          to="/login"
        >
          {" "}
          <p className="">
            <AiOutlineArrowLeft style={{ fontSize: "20px" }} />
          </p>
          <p className=" aligin-items-center fw-bold">Back to Login </p>
        </Link>
      </div>
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

export default Forgotpassword;
