import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import UniversityCard from "./UniversityCard";
import "./UniversityGallery.scss";
import waterlooLogo from "../../assets/waterloo-logo.png";
import queensLogo from "../../assets/queens-logo.png";
import mcmasterLogo from "../../assets/mcmaster-logo.png";
import uoftLogo from "../../assets/uoft-logo.png";
import ubc from "../../assets/ubc.png"
import western from "../../assets/western.png"

export default function CommunityHubGallery() {
  return (
    <div className="uni-gallery-wrapper">
      <h1>Welcome!</h1>
      <div className="light_green">
      <h3>Choose a university to get started!</h3>
      <Grid container className="uni_gallery" spacing={4}>
        <Grid item xs={12} md={6} lg={4}>
          <Link to="/universities/universityofwaterloo">
            <UniversityCard name="University of Waterloo" logo={waterlooLogo} />
          </Link>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Link to="/universities/mcmasteruniversity">
            <UniversityCard name="McMaster University" logo={mcmasterLogo} />
          </Link>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Link to="/universities/universityoftoronto">
            <UniversityCard name="University of Toronto" logo={uoftLogo} />
          </Link>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Link to="/universities/queensuniversity">
            <UniversityCard name="Queens University" logo={queensLogo} />
          </Link>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Link to="/universities/universityofbritishcolumbia">
            <UniversityCard name="University of British Columbia" logo={ubc} />
          </Link>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Link to="/universities/westernuniversity">
            <UniversityCard name="Western University" logo={western} />
          </Link>
        </Grid>
      </Grid>
      </div>
    </div>
  );
}
