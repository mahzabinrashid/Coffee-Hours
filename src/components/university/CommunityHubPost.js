import { useState } from "react";
import fire from "../../fire";
import "./CommunityHubPost.scss";
import ProfilePic from "../UI-components/ProfilePicture";
import Button from "../UI-components/Button.js";

export default function CommunityHubPost() {
  const [enteredComment, setEnteredComment] = useState("");
  const [name, setName] = useState("");
  const [auth, setAuth] = useState(false);
  const formSubmission = (event) => {
    event.preventDefault();
    fire.firestore().collection("comments").add({
      name: name,
      comment: enteredComment,
    });
    setEnteredComment("");
  };
  const commentInputChangeHandler = (event) => {
    setEnteredComment(event.target.value);
  };
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
  return (
    <div className="hub_post">
      {auth && (
        <form onSubmit={formSubmission}>
          <div className="comment">
            <ProfilePic name={name} />

            <textarea
              type="text"
              id="comment"
              placeholder="type here..."
              onChange={commentInputChangeHandler}
              cols="95"
              rows="5"
              value={enteredComment}
            ></textarea>
          </div>
          <div className="hub_button_container">
            <Button text="Submit" />
          </div>
        </form>
      )}
      {!auth && <p className="loggedout"><a href="/login">Log in</a> to post your own comment!</p>}
    </div>
  );
}
