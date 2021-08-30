import { useState, useEffect } from "react";
import fire from "../../fire";
import CommunityHubGallery from "./CommunityHubGallery";
import CommunityHubPost from "./CommunityHubPost";
import "./CommunityHub.scss";
export default function CommunityHub() {
  const [enteredComment, setEnteredComment] = useState("");
  const [name, setName] = useState("");
  const [auth, setAuth] = useState(false);
  const [error, setError] = useState("");
  const [comments, setComments] = useState("");

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
  const getComments = () => {
    fire.auth().onAuthStateChanged(() => {
      fire
        .firestore()
        .collection("comments")
        .get()
        .then((response) => {
          setComments(response.docs);
        });
    });
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
    getComments();
  }, [enteredComment]);

  return (
    <div className="community_hub">
      <h1>Community Hub</h1>
      <p className="community_hub_text">
        Share the key takeways from your coffee chats!
      </p>
      <CommunityHubPost
        auth={auth}
        error={error}
        enteredComment={enteredComment}
        formSubmission={formSubmission}
        name={name}
        commentInputChangeHandler={commentInputChangeHandler}
      />
      <CommunityHubGallery comments={comments} />
    </div>
  );
}
