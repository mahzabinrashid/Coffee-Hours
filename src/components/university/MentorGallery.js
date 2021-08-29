import React from "react";
import Mentor from "./MentorGalleryCard";
import Grid from "@material-ui/core/Grid";
import imageA from "../../assets/person-a.jpeg";
import imageB from "../../assets/person-b.jpeg";
import imageC from "../../assets/person-c.jpeg";
import "./MentorGallery.scss";
class MentorGallery extends React.Component {
  render() {
    return (
      <div class="mentor_gallery">
      <div class="box">
        <Grid container className="uni_galery" spacing={2}>
          <Grid item xs={12} md={6} lg={4}>
            <Mentor
              name="Priscilla Preez"
              image={imageB}
              story="As the first girl in my family of immigrants to pursue a degree, there have been no shortage of obstacles along the way. From dealing with losing family mem..."
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Mentor
              name="Tristan Martin"
              image={imageA}
              story="I was born without hands and feet. It’s a rare condition called congenital amputation. Living with that 
                adversity has made me who I am today. My pa..."
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Mentor
              name="Janet Jonea"
              image={imageC}
              story="I’m a sociology major by day, and an aspiring DJ by night and I love it. After constantly being let down f..."
            />
          </Grid>
        </Grid>
      </div>
      </div>
    );
  }
}

export default MentorGallery;
