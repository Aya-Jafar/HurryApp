import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../store/useAuth";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignupModal";
import logo from "../images/Remove.png";
import logoutIcon from "../images/Logout.png";

function Header() {
  const { setIsLoginModalOpen, setIsSignUpModalOpen } = useAuth();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (localStorage.getItem("userName")) {
      setUserName(localStorage.getItem("userName"));
    }
  }, [userName, localStorage.getItem("userName")]);

  const logout = () => {
    localStorage.removeItem("token");
    setUserName("");
  };

  return (
    <div className="header">
      <div>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <div className="logo">
            <img src={logo} alt="" />
            <h2>GameHub</h2>
          </div>
        </Link>
      </div>

      {userName !== "" ? (
        <div className="logout-username-section">
          <h3>{userName} </h3>
          <img src={logoutIcon} alt="" onClick={logout} />
        </div>
      ) : (
        <div className="auth-btns">
          <button id="login" className="btns" onClick={setIsLoginModalOpen}>
            Log In
          </button>
          <button onClick={setIsSignUpModalOpen} className="btns">
            Sign Up
          </button>
        </div>
      )}

      <LoginModal />
      <SignUpModal />
    </div>
  );
}

export default Header;
