import axios from "./axios";
import React from "react";
import { logoutvalidation } from "./userValidation";

function Home({ data }) {
  async function logout() {
    const token = JSON.parse(localStorage.getItem("user"));
    await axios
      .post("/logout", { Token: token.accessToken })
      .then((result) => {
        logoutvalidation(result);
      })
      .catch((error) => {
        alert(error.message);
      });
  }
  return (
    <div>
      <button
        onClick={() => {
          logout();
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Home;
