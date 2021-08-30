import { useState, useEffect } from "react";
import fire from "../../fire";
import CommunityHubCard from "./CommunityHubCard";
import Grid from "@material-ui/core/Grid";
import "./CommunityHubGallery.scss";
export default function CommunityHubGallery() {
  const [comments, setComments] = useState("");
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

  useEffect(() => {
    getComments();
  }, []);

  return (
    <div class="gallery">
      <Grid container spacing={6}>
        {comments &&
          comments.map((val) => (
            <Grid item xs={12} md={6} lg={4}>
              <CommunityHubCard
                name={val.data().name}
                pic={val.data().name}
                comment={val.data().comment}
              />
            </Grid>
          ))}
      </Grid>
    </div>
  );
}
