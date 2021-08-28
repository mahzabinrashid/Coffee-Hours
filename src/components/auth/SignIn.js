import { useState } from "react";
import fire from "../../fire";
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
    fire
      .auth()
      .signInWithEmailAndPassword(enteredEmail, enteredPassword)
      .then((cred) => console.log(cred.user));
  };
  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={formSubmission}>
        <div>
          <label>Email</label>
          <input
            type="text"
            onChange={emailInputChangeHandler}
          ></input>
        </div>
        <div>
          <label>Password</label>
          <input
            type="text"
            onChange={passwordInputChangeHandler}
          ></input>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
