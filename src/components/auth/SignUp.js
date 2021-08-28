import { useState } from "react";
import fire from "../../fire";
export default function SignUp() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredSchool, setEnteredSchool] = useState("");
  const [enteredGrade, setEnteredGrade] = useState("");
  const [enteredBio, setEnteredBio] = useState("");
  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const passwordInputChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };
  const firstNameInputChangeHandler = (event) => {
    setEnteredFirstName(event.target.value);
  };
  const lastNameInputChangeHandler = (event) => {
    setEnteredLastName(event.target.value);
  };
  const schoolInputHandler = (event) => {
    setEnteredSchool(event.target.value);
  };
  const gradeInputHandler = (event) => {
    setEnteredGrade(event.target.value);
  };
  const bioInputHandler = (event) => {
    setEnteredBio(event.target.value);
  };

  const formSubmission = (event) => {
    event.preventDefault();
    // using firebase to sign up
    fire
      .auth()
      .createUserWithEmailAndPassword(enteredEmail, enteredPassword)
      .then((cred) => {
        fire.firestore().collection("users").doc(cred.user.uid).set({
          firstName: enteredFirstName,
          lastName: enteredLastName,
          school: enteredSchool,
          grade: enteredGrade,
          bio: enteredBio,
        });
      });
  };
  return (
    <div>
      <h1>SignUp</h1>
      <form onSubmit={formSubmission}>
        <div>
          <label>First Name</label>
          <input type="text" onChange={firstNameInputChangeHandler}></input>
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" onChange={lastNameInputChangeHandler}></input>
        </div>
        <div>
          <div>
            <label>Educational Institution</label>
            <input type="text" onChange={schoolInputHandler}></input>
          </div>
          <div>
            <label>Level of Education</label>
            <input type="text" onChange={gradeInputHandler}></input>
          </div>
          <div>
            <label>What do you hope to achieve through XYZ?</label>
            <input type="text" onChange={bioInputHandler}></input>
          </div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            onChange={emailInputChangeHandler}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="text"
            id="password"
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
