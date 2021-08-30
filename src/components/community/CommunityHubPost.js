import { useState, useEffect } from "react";
import fire from "../../fire";
import "./CommunityHubPost.scss";
import ProfilePic from "../UI-components/ProfilePicture";
import Button from "../UI-components/Button.js";

export default function CommunityHubPost() {
  const [enteredComment, setEnteredComment] = useState("");
  const [name, setName] = useState("");
  const [auth, setAuth] = useState(false);
  const [error, setError] = useState("");
  const commentInputChangeHandler = (event) => {
    setEnteredComment(event.target.value);
  };
  const formSubmission = (event) => {
    event.preventDefault();
    if (enteredComment === "") {
      setError("Comments cannot be empty strings!");
    } else {
      fire.firestore().collection("comments").add({
        name: name,
        comment: enteredComment,
      });
      setError("");
      setEnteredComment("");
    }
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
    <div className="hub_post">
      {auth && (
        <form onSubmit={formSubmission}>
          <div className="comment">
            <ProfilePic name={name} />
            <textarea
              type="text"
              id="comment"
              placeholder="Type here..."
              onChange={commentInputChangeHandler}
              cols="95"
              rows="5"
              value={enteredComment}
            ></textarea>
          </div>
          <p className="error_message">{error}</p>
          <div className="hub_button_container">
            <Button text="Submit Comment" />
          </div>
        </form>
      )}
      {!auth && (
        <p className="loggedout">
          <a href="/signin">Log in</a> to post your own comment!
        </p>
      )}
    </div>
  );
}
