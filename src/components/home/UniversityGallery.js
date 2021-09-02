import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import UniversityCard from "./UniversityCard";
import "./UniversityGallery.scss";
import UniversityofWaterlooLogo from "../../assets/waterloo-logo.png";
import McMasterUniversityLogo from "../../assets/mcmaster-logo.png";
import QueensUniversityLogo from "../../assets/queens-logo.png";
import UniversityOfBritishColumbiaLogo from "../../assets/ubc.png";
import UniversityOfTorontoLogo from "../../assets/uoft-logo.png";
import WesternUniversityLogo from "../../assets/western.png";

const UniOptions = [
  {
    name: "University of Waterloo",
    logo: UniversityofWaterlooLogo,
    link: "/universities/universityofwaterloo",
  },
  {
    name: "McMaster University",
    logo: McMasterUniversityLogo,
    link: "/universities/mcmasteruniversity",
  },
  {
    name: "Queens University",
    logo: QueensUniversityLogo,
    link: "/universities/queensuniversity",
  },
  {
    name: "University of British Columbia",
    logo: UniversityOfBritishColumbiaLogo,
    link: "/universities/universityofbritishcolumbia",
  },
  {
    name: "University of Toronto",
    logo: UniversityOfTorontoLogo,
    link: "/universities/universityoftoronto",
  },
  {
    name: "Western University",
    logo: WesternUniversityLogo,
    link: "/universities/westernuniversity",
  },
];
export default function CommunityHubGallery() {
  return (
    <div className="uni-gallery-wrapper">
      <h1>Welcome!</h1>
      <div className="light_green">
        <h3>Choose a university to get started!</h3>
        <Grid container className="uni_gallery" spacing={4}>
          {UniOptions.map((uni) => (
            <Grid item xs={12} md={6} lg={4}>
              <Link to={uni.link}>
                <UniversityCard
                  name={uni.name}
                  logo={uni.logo}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
