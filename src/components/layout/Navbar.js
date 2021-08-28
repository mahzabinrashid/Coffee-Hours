import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import fire from "../../fire";
import "./Navbar.css"

import logo from "./logo_transparent.png"

export default function Navbar() {
  const [auth, setAuth] = useState(false);
  const [firstName, setFirstName] = useState("");

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
            setFirstName(doc.data().firstName);
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
      <Link to="/"><img src={logo} /> Coffee Hours</Link>
      {/* {auth ? <Link to="/" onClick={handleLogout}>Sign Out</Link>
            : <Link to="/signin">Sign In</Link>} */}
    </nav>
  );
}
