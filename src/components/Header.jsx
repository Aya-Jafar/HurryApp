import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../store/useAuth";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignupModal";
import logo from '../images/Remove.png'
// TODO: Remove comments

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

function Header() {
  const { setIsLoginModalOpen, setIsSignUpModalOpen } = useAuth();

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

      <div className="auth-btns">
        <button id="login" className="btns" onClick={setIsLoginModalOpen}>
          Log In
        </button>
        <button onClick={setIsSignUpModalOpen} className="btns">
          Sign Up
        </button>
      </div>

      <LoginModal />
      <SignUpModal />
    </div>
  );
}

export default Header;
