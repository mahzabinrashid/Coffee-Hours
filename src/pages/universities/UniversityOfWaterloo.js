import universityLogo from "../../assets/waterloo-logo-round.png";
import TemplateUniversity from "../../components/university/TemplateUni";

export default function UniversityOfWaterloo() {
  return (
    <TemplateUniversity
      name="University of Waterloo"
      image={universityLogo}
      cover="https://images.pexels.com/photos/137618/pexels-photo-137618.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    />
  );
}
