import { useState } from "react";
import fire from "../../fire";
export default function CommunityHubGallery() {
  const [comments, setComments] = useState("");
  fire
    .firestore()
    .collection("comments")
    .get()
    .then((response) => {
      setComments(response.docs);
    });

  return (
    <div>
      <h1>CommunityHubGallery</h1>
      {comments &&
        comments.map((val) => {
          return (
            <div>
              <p> {val.data().name} </p>
              <p> {val.data().comment} </p>
            </div>
          );
        })}
    </div>
  );
}
