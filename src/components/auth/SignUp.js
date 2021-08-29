import Button from "../UI-components/Button.js";
import { Input, Dropdown } from "semantic-ui-react";
import { useState } from "react";
import fire from "../../fire";
import "./auth.css";
const institutionOptions = [
  {
    key: "uw",
    value: "University of Waterlo",
    text: "University of Waterloo",
  },
  {
    key: "mac",
    value: "McMaster University",
    text: "McMaster University",
  },
  {
    key: "uoft",
    value: "University of Toronto",
    text: "University of Toronto",
  },
  {
    key: "qu",
    value: "Queens University",
    text: "Queens University",
  },
  {
    key: "mcgill",
    value: "McGill University",
    text: "McGill University",
  },
  {
    key: "wu",
    value: "Western University",
    text: "Western University",
  },
];

const educationOptions = [
  {
    key: "hs",
    value: "High School",
    text: "High School",
  },
  {
    key: "uni",
    value: "Undergraduate",
    text: "Undergraduate",
  },
  {
    key: "mas",
    value: "Masters",
    text: "Masters",
  },
  {
    key: "other",
    value: "Other",
    text: "Other",
  },
];

const motivationOptions = [
  {
    key: "a",
    value: "University decision-making",
    text: "University decision-making",
  },
  {
    key: "b",
    value: "Finding mentors within my program",
    text: "Finding mentors within my program",
  },
  {
    key: "c",
    value: "Discovering career prospects",
    text: "Discovering career prospects",
  },
  {
    key: "d",
    value: "Networking",
    text: "Networking",
  },
];

export default function SignUp() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredSchool, setEnteredSchool] = useState("");
  const [enteredGrade, setEnteredGrade] = useState("");
  const [enteredBio, setEnteredBio] = useState("");
  const [error, setError] = useState("");
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
  const schoolInputHandler = (event, obj) => {
    setEnteredSchool(obj.value);
  };
  const gradeInputHandler = (event, obj) => {
    setEnteredGrade(obj.value);
  };
  const bioInputHandler = (event, obj) => {
    setEnteredBio(obj.value);
  };

  const formSubmission = (event) => {
    event.preventDefault();
    // using firebase to sign up
    fire
      .auth()
      .createUserWithEmailAndPassword(enteredEmail, enteredPassword)
      .then(async (cred) => {
        await fire.firestore().collection("users").doc(cred.user.uid).set({
          firstName: enteredFirstName,
          lastName: enteredLastName,
          school: enteredSchool,
          grade: enteredGrade,
          reasonForJoining: enteredBio,
        });
        window.location.href = "/home";
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setError(err.message);
            break;
          case "auth/weak-password":
            setError(err.message);
            break;
        }
      });
  };

  return (
    <div className="form">
      <h1>Sign Up</h1>
      <p className="error">{error}</p>
      <form onSubmit={formSubmission}>
        <p>
          Join now to be part of a growing community of people who love to chat,
          and love to learn!
        </p>
        <p>Get started by registering with your email!</p>
        <div className="inline group left">
          <label>First Name</label>
          <Input
            fluid
            type="text"
            onChange={firstNameInputChangeHandler}
            required
          />
        </div>
        <div className="inline group right">
          <label>Last Name</label>
          <Input
            fluid
            type="text"
            onChange={lastNameInputChangeHandler}
            required
          />
        </div>
        <div className="inline group left">
          <label>Educational Institution (optional)</label>
          <Dropdown
            fluid
            search
            selection
            placeholder="Select an answer"
            value={enteredSchool}
            options={institutionOptions}
            onChange={schoolInputHandler}
          />
        </div>
        <div className="inline group right">
          <label>Level of Education (optional)</label>
          <Dropdown
            fluid
            selection
            placeholder="Select an answer"
            options={educationOptions}
            value={enteredGrade}
            onChange={gradeInputHandler}
          />
        </div>
        <div className="group">
          <label>
            What do you hope to achieve through Coffee Hours? (optional)
          </label>
          <Dropdown
            fluid
            selection
            placeholder="Select an answer"
            value={enteredBio}
            options={motivationOptions}
            onChange={bioInputHandler}
          />
        </div>
        <div className="group">
          <label htmlFor="email">Email</label>
          <Input
            fluid
            type="email"
            onChange={emailInputChangeHandler}
            required
          />
        </div>
        <div className="group">
          <label htmlFor="password">Password</label>
          <Input
            fluid
            type="password"
            onChange={passwordInputChangeHandler}
            required
          />
        </div>
        <div className="buttons">
          <Button text="Sign Up" />
        </div>
      </form>
    </div>
  );
}
