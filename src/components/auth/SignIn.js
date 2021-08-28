import Button from "../UI-components/Button.js"
import { Input } from "semantic-ui-react";
import { useState } from "react";
import fire from "../../fire";

import "./auth.css"

export default function SignIn() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const passwordInputChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };
  const formSubmission = (event) => {
    event.preventDefault();
    // using firebase to log the user in
    fire.auth().signInWithEmailAndPassword(enteredEmail, enteredPassword);
  };
  return (
    <div className="form">
      <h1>Sign In</h1>
      <form onSubmit={formSubmission}>
        <div className="group">
          <label>Email</label>
          <Input
            type="text"
            onChange={emailInputChangeHandler}
            required
          />
        </div>
        <div className="group">
          <label>Password</label>
          <Input
            type="password"
            onChange={passwordInputChangeHandler}
            required
          />
        </div>
        <div>
          <Button text="Submit" />
        </div>
      </form>
    </div>
  );
}
