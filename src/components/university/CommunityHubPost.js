import { useState } from "react";
import fire from "../../fire";
import { Input } from "semantic-ui-react";
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
      <h1>Community Hub Post</h1>

      {auth && (
        <form onSubmit={formSubmission}>
          <div className="comment">
            <label className="pic">
              <ProfilePic name={name} />
            </label>

            <textarea
              type="text"
              id="comment"
              placeholder="type here..."
              onChange={commentInputChangeHandler}
              cols="95"
              rows="5"
            ></textarea>
          </div>
          <div class="btn">
            <Button text="Submit" />
          </div>
        </form>
      )}
      {!auth && <p>log in to comment</p>}
    </div>
  );
}
