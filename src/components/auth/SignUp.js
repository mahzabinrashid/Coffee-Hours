import Button from "../UI-components/Button.js";
import { Input, Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import fire from "../../fire";
import "./Auth.scss";
import { Grid } from "@material-ui/core";
// options for dropdown
const institutionOptions = [
  {
    key: "uw",
    value: "University of Waterlo",
    text: "University of Waterloo",
  },
  {
    key: "mcmaster",
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
    key: "masters",
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
      .catch((error) => {
        if (
          error.code === "auth/email-already-in-use" ||
          error.code === "auth/invalid-email" ||
          error.code === "auth/weak-password"
        ) {
          setError(error.message);
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
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <label>First Name</label>
            <Input
              fluid
              type="text"
              onChange={firstNameInputChangeHandler}
              required
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <label>Last Name</label>
            <Input
              fluid
              type="text"
              onChange={lastNameInputChangeHandler}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <label htmlFor="email">Email</label>
            <Input
              fluid
              type="email"
              onChange={emailInputChangeHandler}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <label htmlFor="password">Password</label>
            <Input
              fluid
              type="password"
              onChange={passwordInputChangeHandler}
              required
            />
          </Grid>
          <Grid item xs={12} md={6}>
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
          </Grid>
          <Grid item xs={12} md={6}>
            <label>Level of Education (optional)</label>
            <Dropdown
              fluid
              selection
              placeholder="Select an answer"
              options={educationOptions}
              value={enteredGrade}
              onChange={gradeInputHandler}
            />
          </Grid>
          <Grid item xs={12}>
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
          </Grid>
        </Grid>
        <div className="buttons bottom_padding">
          <Button text="Sign Up" />
        </div>
        <p>
          Already have an account? <Link to="/signin">Sign in now!</Link>
        </p>
      </form>
    </div>
  );
}
