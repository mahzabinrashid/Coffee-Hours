import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import fire from "../../fire";
import Button from "../UI-components/Button.js";
import "./Navbar.scss";
import logo from "../../assets/logo_transparent.png";
import chatIcon from "../../assets//chat-icon.png";
import homeIcon from "../../assets/home-icon.png";

export default function Navbar() {
  const [auth, setAuth] = useState(false);

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setAuth(true);
      } else {
        setAuth(false);
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
    <nav>
      <span className="left group">
        {/* <Link to={auth ? "/home" : "/"}> */}
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
          <span className="site-title">Coffee Hours</span>
        </Link>
        <span className="nav-spacer" />
        {/* <Link to={auth ? "/home" : "/"}> */}
        <Link to="/home">
          <img src={homeIcon} className="icon" alt="home icon" />
        </Link>
        <Link to="/communityhub">
          <img src={chatIcon} className="icon" alt="chat icon" />
        </Link>
      </span>
      <span className="right group">
        {auth ? (
          <Link to="/signin" onClick={handleLogout}>
            <Button text="Sign Out" secondary />
          </Link>
        ) : (
          <>
            <Link to="/signin">
              <Button text="Log In" secondary />
            </Link>
          </>
        )}

        {
          // show and hide nav items based on auth. Disabled to give a clearer overview of the project without having to sign in.
          /* {auth ? (
          <>
            <Link to="/communityhub">
              <img src={chatIcon} className="icon" alt="chat icon"/>
            </Link>
            <Link to={auth ? "/home" : "/"}>
              <img src={homeIcon} className="icon" alt="home icon"/>
            </Link>
            <Link to="/signin" onClick={handleLogout}>
              <Button text="Sign Out" secondary />
            </Link>
          </>
        ) : (
          <>
            <Link to="/signup" >
              <Button text="Sign Up" primary />
            </Link>
            <Link to="/signin">
              <Button text="Log In" secondary />
            </Link>
          </>
        )} */
        }
      </span>
    </nav>
  );
}
