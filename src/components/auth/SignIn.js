import Button from "../UI-components/Button.js";
import { Link } from "react-router-dom";
import { Input } from "semantic-ui-react";
import { useState } from "react";
import fire from "../../fire";
import "./Auth.scss";


export default function SignIn() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [error, setError] = useState("");
  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const passwordInputChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };
  const formSubmission = (event) => {
    event.preventDefault();
    // using firebase to log the user in
    fire
      .auth()
      .signInWithEmailAndPassword(enteredEmail, enteredPassword)
      .then(() => {
        window.location.href = "/home";
      })
      .catch((error) => {
        if (
          error.code === "auth/invalid-email" ||
          error.code === "auth/user-disabled" ||
          error.code === "auth/user-not-found" ||
          error.code === "auth/wrong-password"
        ) {
          setError(error.message);
        }
      });
  };
  return (
    <div className="form">
      <h1>Log In</h1>
      <p className="error">{error}</p>
      <form onSubmit={formSubmission}>
        <div className="group">
          <label>Email Address</label>
          <Input
            fluid
            type="text"
            onChange={emailInputChangeHandler}
            required
          />
        </div>
        <div className="group">
          <label>Password</label>
          <Input
            fluid
            type="password"
            onChange={passwordInputChangeHandler}
            required
          />
        </div>
        <div className="buttons bottom_padding">
          <Button text="Login" />
        </div>
        <p>
          Don't have an account? <Link to="/signup">Sign up now!</Link>
        </p>
      </form>
    </div>
  );
}
