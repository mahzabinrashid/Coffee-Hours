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

const educationOptions = [
  {
    key: 'hs',
    value: 'hs',
    text: 'High School'
  },
  {
    key: 'uni',
    value: 'uni',
    text: 'Undergrad'
  },
  {
    key: 'mas',
    value: 'mas',
    text: 'Masters'
  },
  {
    key: 'other',
    value: 'other',
    text: 'Other'
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
  const [formProgress, setFormProgress] = useState(0);
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

  let progressForm = () => { setFormProgress(1) }
  let unprogressForm = () => { setFormProgress(0) }
  
  return (
    <div className="form">
      <h1>Sign Up</h1>
      <form onSubmit={formSubmission}>
        <div className="form-part-1" style={formProgress == 0 ? null : {display: "none"}}>
          <p>Join now to be part of a growing community of people who love to chat, and love to learn!</p>
          <p>Get started by registering with your .edu email!</p>
          <div className="inline group left">
            <label>First Name</label>
            <Input fluid type="text" onChange={firstNameInputChangeHandler} required />
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
          <div className="buttons">
            <span className="fake-button" onClick={progressForm}>Continue</span>
          </div>
        </div>
        
        <div className="form-part-2" style={formProgress == 1 ? null : {display: "none"}}>
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
            <Dropdown fluid selection
              placeholder='Select an answer'
              options={educationOptions}
              onChange={gradeInputHandler}
              required
            />
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
          <div className="buttons">
            <span className="fake-button secondary" onClick={unprogressForm}>Back</span>
            <Button text="Submit" />
          </div>
        </div>
      </form>
    </div>
  );
}
