import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./Home";
import Forgotpassword from "./Forgotpassword";
function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  window.addEventListener("storage", () => {
    setUser(JSON.parse(localStorage.getItem("user")));
  });
  console.log(user);
  return (
    <>
      {user == null ? (
        <div className="App">
          <div className="container-fluid  d-flex  align-items-center  min-vh-100">
            {/* Login */}
            <div className="Login  row d-flex justify-content-center  box-area">
              <div className="left  vh-100   d-flex col-lg-6 justify-content-center align-items-center right-box">
                <div className="left_child  d-flex  flex-column ">
                  <div className="header-text d-flex flex-column">
                    <h className="">Unlock Your</h>
                    <h className="">
                      Team <span>Performance</span>
                    </h>
                  </div>
                  <div className="featured-image d-flex justify-content-center">
                    <img
                      className="img-fluid"
                      src="Mobile login-pana.svg"
                      alt=""
                      style={{ minWidth: "350px", width: "600px" }}
                    />
                  </div>
                </div>
              </div>
              <div className="right vh-120  col-lg-6 d-flex justify-content-center align-items-center  right-box">
                <div className="right_child ">
                  <Routes>
                    <Route exact path="/" element={<Login />}></Route>
                    <Route exact path="/login" element={<Login />}></Route>
                    <Route path="/signup" element={<SignUp />}></Route>
                    <Route
                      path="/Forgotpassword"
                      element={<Forgotpassword />}
                    ></Route>
                  </Routes>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Home />
      )}
    </>
  );
}
export default App;
