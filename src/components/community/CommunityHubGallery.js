import { useState } from "react";
import fire from "../../fire";
import CommunityHubCard from "./CommunityHubCard";
import Grid from "@material-ui/core/Grid";
import "./CommunityHubGallery.scss";
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
    <div class="gallery">
      <Grid container>
        {comments && comments.map((val) => (
          <Grid item xs={12} md={6} lg={3}>
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
