import Button from "../UI-components/Button.js"
import { Input, Dropdown } from "semantic-ui-react";
import { useState } from "react";
import fire from "../../fire";

import "./auth.css"

const institutionOptions = [
  {
    key: 'uw',
    value: 'uw',
    text: 'University of Waterloo'
  },
  {
    key: 'mac',
    value: 'mac',
    text: 'McMaster University'
  },
  {
    key: 'uoft',
    value: 'uoft',
    text: 'University of Toronto'
  },
  {
    key: 'qu',
    value: 'qu',
    text: 'Queens University'
  }
]

const motivationOptions = [
  {
    key: 'a',
    value: 'a',
    text: 'Speak to people in my faculty'
  },
  {
    key: 'b',
    value: 'b',
    text: 'Become cooler'
  },
  {
    key: 'c',
    value: 'c',
    text: 'Get inspired'
  }
]

const referralOptions = [
  {
    key: 'linkedin',
    value: 'linkedin',
    text: 'Linkedin'
  },
  {
    key: 'friends',
    value: 'friends',
    text: 'Friends and family'
  },
  {
    key: 'what',
    value: 'what',
    text: 'Just stumbled across it!'
  }
]

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
    <div className="form">
      <h1>SignUp</h1>
      <form onSubmit={formSubmission}>
        <div className="inline group left">
          <label>First Name</label>
          <Input fluid type="text" onChange={firstNameInputChangeHandler} />
        </div>
        <div className="inline group right">
          <label>Last Name</label>
          <Input fluid type="text" onChange={lastNameInputChangeHandler} required />
        </div>
        <div className="group">
          <label htmlFor="email">Email</label>
          <Input fluid
            type="email"
            onChange={emailInputChangeHandler}
            required
           />
        </div>
        <div className="group">
          <label htmlFor="password">Password</label>
          <Input fluid
            type="password"
            onChange={passwordInputChangeHandler}
            required
           />
        </div>
        <div className="group">
          <label htmlFor="password">Confirm Password</label>
          <Input fluid
            type="password"
            onChange={passwordInputChangeHandler}
            required
           />
        </div>
        <div className="inline group left">
          <label>Educational Institution</label>
          <Dropdown fluid search selection
            placeholder='Select an answer'
            options={institutionOptions}
            onChange={schoolInputHandler}
            required
          />
        </div>
        <div className="inline group right">
          <label>Level of Education</label>
          <Input fluid fluid type="text" onChange={gradeInputHandler} required />
        </div>
        <div className="group">
          <label>What do you hope to achieve through Coffee Hours?</label>
          <Dropdown fluid selection
            placeholder='Select an answer'
            options={motivationOptions}
            onChange={bioInputHandler}
            required
          />
        </div>
        <div className="group">
          <label>Where did you hear about Coffee Hours?</label>
          <Dropdown fluid selection
            placeholder='Select an answer'
            options={referralOptions}
            // onChange={}
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
