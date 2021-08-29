import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import fire from "../../fire";
import Button from "../UI-components/Button.js";
import "./Navbar.css";
import logo from "./logo_transparent.png";

export default function Navbar() {
  const [auth, setAuth] = useState(false);
  const [name, setName] = useState("");

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setAuth(true);
        // getting user info from firebase
        fire
          .firestore()
          .collection("users")
          .doc(user.uid)
          .get()
          .then((doc) => {
            // we can get other user info in a similar way (ser SignUp.js component for other key-value pairs)
            setName(`${doc.data().firstName} ${doc.data().lastName}`);
          });
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
      <span className="left">
        <Link to="/">
          <img src={logo} /> Coffee Hours
        </Link>
      </span>
      <span className="right">
        {auth ? (
          <>
            <Button to="/" onClick={handleLogout} text="Sign Out" />
          </>
        ) : (
          <>
            <Link to="/signup">
              <Button text="Sign Up" />
            </Link>
            <Link to="/signin">
              <Button text="Log In" secondary />
            </Link>
          </>
        )}
      </span>
    </nav>
  );
}
