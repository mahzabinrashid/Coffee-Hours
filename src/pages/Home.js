import { UniversityGallery, UniversityCard } from "../components/home/UniversityGallery";
import "./page.css";
import waterlooLogo from '../assets/waterloo-logo.png'
import queensLogo from '../assets/queens-logo.png'
import mcmasterLogo from '../assets/mcmaster-logo.png'
import uoftLogo from '../assets/uoft-logo.png'

export default function Home() {
  return (
    <div className="page-content">
      <h1>Welcome!</h1>
      <UniversityGallery>
        <UniversityCard name="University of Waterloo" logo={waterlooLogo} />
        <UniversityCard name="University of Toronto" logo={uoftLogo} />
        <UniversityCard name="McMaster University" logo={mcmasterLogo} />
        <UniversityCard name="Queens University" logo={queensLogo} />
      </UniversityGallery>
    </div>
  );
}
