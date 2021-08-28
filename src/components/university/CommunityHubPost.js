import { useState } from "react";
import fire from "../../fire";

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
    <div>
      <h1>Community Hub Post</h1>
      {auth && (
        <form onSubmit={formSubmission}>
          <div>
            <label>Comment</label>
            <input
              type="text"
              id="comment"
              onChange={commentInputChangeHandler}
            ></input>
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      )}
      {!auth && <p>log in to comment</p>}
    </div>
  );
}
