import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import fire from "../../fire";
import ProfilePic from "../UI-components/ProfilePicture";

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
      <p>{auth && name}</p>
      <Link to="/">Home</Link>
      {!auth && <Link to="/signin">Sign In</Link>}
      {auth && (
        <Link to="/" onClick={handleLogout}>
          Sign Out
        </Link>
      )}
      <ProfilePic name={name}/>
    </nav>
  );
}
