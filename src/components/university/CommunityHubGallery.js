import { useState } from "react";
import fire from "../../fire";
import ProfilePic from "../UI-components/ProfilePicture";
import CommunityHubCard from "./CommunityHubCard";
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
              <CommunityHubCard/>
              <p> {val.data().name} </p>
              <p> {val.data().comment} </p>
              <ProfilePic name={val.data().name}/>
            </div>
          );
        })}
    </div>
  );
}
