import { UniversityGallery, UniversityCard } from "../components/home/UniversityGallery";
import { Link } from "react-router-dom";
import waterlooLogo from '../assets/waterloo-logo.png'
import queensLogo from '../assets/queens-logo.png'
import mcmasterLogo from '../assets/mcmaster-logo.png'
import uoftLogo from '../assets/uoft-logo.png'

import "./page.css";

export default function Home() {
  return (
    <div className="page-content">
      <h1>Welcome!</h1>
      <UniversityGallery>
        <Link to="/universities/universityofwaterloo"><UniversityCard name="University of Waterloo" logo={waterlooLogo} /></Link>
        <Link to="/universities/uoft"><UniversityCard name="University of Toronto" logo={uoftLogo} /></Link>
        <Link to="/universities/mac"><UniversityCard name="McMaster University" logo={mcmasterLogo} /></Link>
        <Link to="/universities/queens"><UniversityCard name="Queens University" logo={queensLogo} /></Link>
      </UniversityGallery>
    </div>
  );
}
