import CommunityHubCard from "./CommunityHubCard";
import Grid from "@material-ui/core/Grid";
import "./CommunityHubGallery.scss";
export default function CommunityHubGallery(props) {
  return (
    <div className="gallery">
      <Grid container spacing={6}>
        {props.comments &&
          props.comments.map((val) => (
            <Grid item xs={12} md={6} lg={4}>
              <CommunityHubCard
                key={val.id}
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
